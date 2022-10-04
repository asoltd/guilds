import { styled } from "@mui/system"
import { Grid } from "@mui/material"
import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, deleteDoc, getDocs, query } from "firebase/firestore"
import { populateTeams, Team } from "../../storage/team"
import TeamCard from "./TeamCard"

const ButtonContainer = styled("div")({
  display: "flex",
  gap: "4rem",
  margin: "4rem 0rem",
})

export const Teams = (): JSX.Element => {
  const firestore = useFirestore()
  const teamsQuery = query(collection(firestore, "teams"))
  const { status, data: teams } = useFirestoreCollectionData(teamsQuery)

  const handleClean = async () => {
    const teamsDocs = await getDocs(collection(firestore, "teams"))
    teamsDocs.forEach((doc) => deleteDoc(doc.ref))
  }
  return (
    <>
      <ButtonContainer>
        {!teams?.length && (
          <button onClick={() => populateTeams(firestore)}>
            populate teams if not populated
          </button>
        )}
        <button onClick={handleClean}>Clean the Team Collection</button>
      </ButtonContainer>
      {status && (
        <>
          {status === "loading" ? (
            <div>loading</div>
          ) : (
            <>
              <Grid container spacing={2} xs={12}>
                {teams?.length ? (
                  teams.map((team: Team, idx) => (
                    <Grid item key={idx} xs={3}>
                      <TeamCard team={team} />
                    </Grid>
                  ))
                ) : (
                  <div>no teams</div>
                )}
              </Grid>
            </>
          )}
        </>
      )}
    </>
  )
}
