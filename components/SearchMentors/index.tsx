import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, query, where } from "firebase/firestore"
import { Stack, Typography } from "@mui/material"
import "firebase/firestore"
import { Container } from "@mui/system"
import { Hero } from "types/hero"
import { MentorCard } from "./MentorCard"

export function SearchMentors() {
  const firestore = useFirestore()
  const heroesCollection = collection(firestore, `heroes`)
  const mentorsQuery = query(heroesCollection, where("isMentor", "==", true))

  const { status: mentorsStatus, data: mentors } =
    useFirestoreCollectionData(mentorsQuery)

  return (
    <Stack spacing={4} alignItems="center" sx={{ overflow: "clip" }}>
      <Container>
        <Stack spacing={6}>
          <Stack direction="row">
            {/*TO DO: ADD REUSABLE SLIDER COMPONENT */}
            {mentorsStatus === "success" ? (
              mentors &&
              mentors?.map((mentor: Hero, idx) => (
                <MentorCard key={idx} mentor={mentor} />
              ))
            ) : (
              <Typography>Loading...</Typography>
            )}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}
