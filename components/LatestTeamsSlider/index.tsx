import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, limit, orderBy, query } from "firebase/firestore"
import { Stack } from "@mui/material"
import { Team } from "storage/team"
import { ReusableSlider } from "components/ReusableComponents/ReusableSlider/ReusableSlider"

export function LatestTeamsSlider() {
  const firestore = useFirestore()
  const teamsRef = collection(firestore, "teams")
  const teamsQuery = query(teamsRef, orderBy("createdAt", "desc"), limit(20))
  const { status: teamsStatus, data: teams } =
    useFirestoreCollectionData(teamsQuery)
  const exampleTeams = teams as Team[]

  return (
    <Stack>
      <ReusableSlider
        variant="team"
        status={teamsStatus}
        items={exampleTeams}
      />
    </Stack>
  )
}
