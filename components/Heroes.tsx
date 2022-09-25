import { Grid } from "styled-css-grid"
import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, query } from "firebase/firestore"
import { populateHeroes } from "../storage/hero"

export default function Heroes(): JSX.Element {
  const firestore = useFirestore()
  const heroesQuery = query(collection(firestore, "heroes"))
  const { status, data: heroes } = useFirestoreCollectionData(heroesQuery)

  return (
    <>
      <button onClick={() => populateHeroes(firestore)}>
        populate heroes if not populated
      </button>
      {status && (
        <>
          {status === "loading" ? (
            <div>loading</div>
          ) : (
            <Grid columns={"repeat(auto-fit, minmax(16rem, 1fr))"} gap={"7rem"}>
              {heroes?.length ? (
                heroes.map((hero, idx) => (
                  <div key={idx}>
                    <img
                      src={hero?.profilePicture}
                      width="200"
                      height="200"
                      alt="hero"
                    />
                    <div>email: {hero?.email}</div>
                    <div>
                      name: {hero?.name.first} {hero?.name.second}{" "}
                      {hero?.name.last}
                    </div>
                    <div>
                      location: {hero?.location.city}, {hero?.location.country}
                    </div>
                    <div>bio: {hero?.bio}</div>
                    <div>twitter: {hero?.twitter}</div>
                    <div>linkedin: {hero?.linkedin}</div>
                    <div>website: {hero?.website}</div>
                  </div>
                ))
              ) : (
                <div>no heroes</div>
              )}
            </Grid>
          )}
        </>
      )}
    </>
  )
}
