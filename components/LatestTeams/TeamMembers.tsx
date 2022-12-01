import styled from "@emotion/styled"
import { Box, Stack } from "@mui/material"
import {
  StorageImage,
  useFirestore,
  useFirestoreCollectionData,
} from "reactfire"
import { collection } from "firebase/firestore"
import { Team } from "types/team"

const MemberIcon = styled(StorageImage)({
  objectFit: "cover",
  height: "1.5rem",
  width: "1.5rem",
  borderRadius: "50%",
})

interface TeamMemberProps {
  team: Team
}

export function TeamMembers({ team }: TeamMemberProps) {
  const firestore = useFirestore()
  const membersRef = collection(firestore, `teams/${team.id}/members`)
  const { data: members } = useFirestoreCollectionData(membersRef)
  const rolesRef = collection(firestore, `teams/${team.id}/roles`)
  const { data: roles } = useFirestoreCollectionData(rolesRef)

  return (
    <Stack direction="row" spacing={1}>
      {roles.map((role, idx) =>
        members && members[idx] ? (
          <MemberIcon storagePath="teams/team.jpeg" key={idx} />
        ) : (
          <Box
            sx={{
              width: "1.5rem",
              height: "1.5rem",
              borderRadius: "50%",
              backgroundColor: (theme) => theme.palette.grey[200],
            }}
            key={idx}
          />
        )
      )}
    </Stack>
  )
}