import { useRouter } from "next/router"
import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, query, where } from "firebase/firestore"
import { Stack } from "@mui/material"
import { Role as RoleType } from "storage/team"
import { ReusableSlider } from "components/ReusableComponents/ReusableSlider/ReusableSlider"

export function RolesAvailableSlider() {
  const router = useRouter()
  const teamId = router.query.teamId
  const firestore = useFirestore()
  const rolesRef = collection(firestore, `teams/${teamId}/roles`)
  const rolesQuery = query(rolesRef, where("status", "==", "free"))
  const { status: rolesStatus, data: roles } =
    useFirestoreCollectionData(rolesQuery)
  const exampleRoles = roles as RoleType[]

  return (
    <Stack>
      <ReusableSlider
        variant="role"
        status={rolesStatus}
        items={exampleRoles}
      />
    </Stack>
  )
}
