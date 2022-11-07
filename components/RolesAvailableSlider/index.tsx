import styled from "styled-components"
import { useRouter } from "next/router"
import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, query, where } from "firebase/firestore"
import { Box, Stack, Typography } from "@mui/material"
import { Role } from "./Role"
import { useRef, useState } from "react"
import { ScrollLeft, ScrollRight } from "components/ScrollButtons"
import { Container } from "@mui/system"
import { Role as RoleType } from "storage/team"

const RolesStack = styled(Stack)({
  "&::-webkit-scrollbar": {
    display: "none",
  },
})

export function RolesAvailableSlider() {
  const [scrolledRole, setScrolledRole] = useState(0)
  const [mouseScrollDisabled, setMouseScrollDisabled] = useState(false)
  const router = useRouter()
  const teamId = router.query.teamId
  const firestore = useFirestore()
  const rolesRef = collection(firestore, `teams/${teamId}/roles`)
  const rolesQuery = query(rolesRef, where("status", "==", "free"))
  const { status: rolesStatus, data: roles } =
    useFirestoreCollectionData(rolesQuery)

  const rolesRefs = useRef([])
  const rolesContainerRef = useRef()

  return (
    <Stack spacing={4} alignItems="center" sx={{ overflow: "clip" }}>
      <Container>
        <Stack spacing={6}>
          <Stack spacing={1}>
            <Typography variant="h4" fontWeight={600}>
              Roles available
            </Typography>
            <Typography variant="h6" fontWeight={400} color="text.secondary">
              Current roles available within this team.
            </Typography>
          </Stack>
          <Stack spacing={6}>
            <Stack direction="row">
              <RolesStack
                direction="row"
                spacing={3}
                ref={rolesContainerRef}
                sx={{
                  scrollBehavior: "smooth",
                  overflow: mouseScrollDisabled ? "hidden" : "scroll",
                  pr: "100vw",
                }}
                onMouseEnter={() => setMouseScrollDisabled(true)}
                onMouseLeave={() => setMouseScrollDisabled(false)}
              >
                {rolesStatus === "success" ? (
                  roles?.map((role: RoleType, idx) => (
                    <Box
                      key={idx}
                      ref={(ref) => {
                        rolesRefs.current[idx] = ref
                      }}
                    >
                      <Role role={role} teamId={teamId} />
                    </Box>
                  ))
                ) : (
                  <Typography>Loading...</Typography>
                )}
              </RolesStack>
            </Stack>
            <Stack direction="row" spacing={3}>
              <ScrollLeft
                scrolledValue={scrolledRole}
                setScrolledValue={setScrolledRole}
                refs={rolesRefs}
                containerRef={rolesContainerRef}
              />
              <ScrollRight
                scrolledValue={scrolledRole}
                setScrolledValue={setScrolledRole}
                refs={rolesRefs}
                containerRef={rolesContainerRef}
              />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}
