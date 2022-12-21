import { Box, Stack } from "@mui/material"
import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection } from "firebase/firestore"
import { Team } from "types/team"
import { MemberAvatar } from "./MemberAvatar"

interface TeamMemberProps {
  team: Team
}

export function TeamMembers({ team }: TeamMemberProps) {
  const firestore = useFirestore()
  const rolesRef = collection(firestore, `teams/${team.id}/roles`)
  const { data: roles } = useFirestoreCollectionData(rolesRef)

  return (
    <Stack direction="row" spacing={1}>
      {roles?.map((role, idx) =>
        team.members && team.members[idx] ? (
          <MemberAvatar memberId={team.members[idx]} key={idx} />
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
