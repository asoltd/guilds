import { Grid } from "styled-css-grid"
import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, deleteDoc, getDocs, query } from "firebase/firestore"
import { populateTeams, Team } from "../storage/team"
import Link from "next/link"
import styled from "styled-components"
import Image from "next/image"

const ButtonContainer = styled.div`
  display: flex;
  gap: 4rem;
  margin: 4rem 0rem;
`

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
        <button onClick={() => populateTeams(firestore)}>
          populate teams if not populated
        </button>
        <button onClick={handleClean}>Clean the Team Collection</button>
      </ButtonContainer>
      {status && (
        <>
          {status === "loading" ? (
            <div>loading</div>
          ) : (
            <>
              <Grid
                columns={"repeat(auto-fit, minmax(210px, 1fr))"}
                gap={"4rem"}
              >
                {teams?.length ? (
                  teams.map((team: Team, idx) => (
                    <div key={idx}>
                      <div>
                        <Image
                          src={`${team?.image}`}
                          alt={team.name.first}
                          width={500}
                          height={400}
                        />
                      </div>
                      <div>
                        <b> Name: </b>
                        {team.name.first} {team.name.second} {team.name.last}
                      </div>
                      <div>
                        <b>Title: </b>
                        {team?.title}
                      </div>
                      <div>
                        <b>Description:</b> {team?.description}
                      </div>
                      <div>
                        <b>Tags:</b> {team?.tags}
                      </div>
                      <Link
                        href={{
                          pathname: "/team",
                          query: { teamId: team.id },
                        }}
                      >
                        <button>view {team.name.first}</button>
                      </Link>
                    </div>
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
