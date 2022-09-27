import { Grid } from "styled-css-grid"
import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, query } from "firebase/firestore"
import { populateTeams } from "../storage/team"
import Link from "next/link"
import { useEffect } from "react"

export default function Teams(): JSX.Element {
  const firestore = useFirestore()
  const teamsQuery = query(collection(firestore, "teams"))
  const { status, data: teams } = useFirestoreCollectionData(teamsQuery)

  useEffect(() => {
    console.log(teams)
  })
  return (
    <>
      <button
        onClick={() => populateTeams(firestore)}
        style={{ marginBottom: "100px" }}
      >
        populate teams if not populated
      </button>
      {status && (
        <>
          {status === "loading" ? (
            <div>loading</div>
          ) : (
            <>
              <Grid
                columns={"repeat(auto-fit, minmax(210px, 1fr))"}
                gap={"83px"}
              >
                {teams?.length ? (
                  teams.map((team, idx) => (
                    <div key={idx}>
                      <div>
                        <img
                          src={team?.image}
                          width="200"
                          height="200"
                          alt="hero"
                        />
                      </div>
                      <div>
                        <b> Name: </b>
                        {team?.name.first} {team?.name.second} {team?.name.last}
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
                          query: { teamId: team?.NO_ID_FIELD },
                        }}
                      >
                        <button>view {team?.name.first}</button>
                      </Link>
                    </div>
                  ))
                ) : (
                  <div style={{ margin: "auto" }}>no teams</div>
                )}
              </Grid>
            </>
          )}
        </>
      )}
    </>
  )
}
