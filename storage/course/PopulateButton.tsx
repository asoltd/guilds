import { Button } from "@mui/material"
import { useFirestore } from "reactfire"
import { populateCourses } from "."

export function PopulateButton() {
  const firestore = useFirestore()

  return (
    <Button onClick={() => populateCourses(firestore)}>Populate Courses</Button>
  )
}
