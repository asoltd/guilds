import styled from "styled-components"
import Link from "next/link"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, limit, orderBy, query } from "firebase/firestore"
import { Box, Stack, Button, Typography } from "@mui/material"
import { LatestTeam } from "./LatestTeam"
import { Team } from "storage/team"
import { useRef, useState } from "react"
import { ScrollLeft, ScrollRight } from "components/ScrollButtons"
import { Container } from "@mui/system"

const LatestTeamsStack = styled(Stack)({
  "&::-webkit-scrollbar": {
    display: "none",
  },
})

export function LatestTeamsSlider() {
  const [scrolledTeam, setScrolledTeam] = useState(0)
  const [mouseScrollDisabled, setMouseScrollDisabled] = useState(false)
  const firestore = useFirestore()
  const teamsRef = collection(firestore, "teams")
  const teamsQuery = query(teamsRef, orderBy("createdAt", "desc"), limit(20))
  const { status: teamsStatus, data: teams } =
    useFirestoreCollectionData(teamsQuery)

  const latestTeamsRefs = useRef([])
  const latestTeamsContainerRef = useRef()

  const isMobile = useMediaQuery("(max-width: 600px)")

  return (
    <Stack spacing={4} alignItems="center" sx={{ overflow: "clip" }}>
      <Container>
        <Stack spacing={6}>
          <Stack direction="row" justifyContent="space-between">
            <Stack spacing={2}>
              <Typography variant="h4">Latest teams</Typography>
              <Typography variant={"body2"} color={"text.secondary"}>
                The latest teams that have been posted to Guilds
              </Typography>
            </Stack>
            {!isMobile && (
              <Link href="/quests">
                <Button variant="contained" sx={{ height: "2.5rem" }}>
                  <Typography variant="body2" sx={{ textTransform: "none" }}>
                    View all teams
                  </Typography>
                </Button>
              </Link>
            )}
          </Stack>
          <Stack spacing={6}>
            <Stack direction="row">
              <LatestTeamsStack
                direction="row"
                spacing={3}
                ref={latestTeamsContainerRef}
                sx={{
                  scrollBehavior: "smooth",
                  overflow: mouseScrollDisabled ? "hidden" : "scroll",
                  pr: "100vw",
                }}
                onMouseEnter={() => setMouseScrollDisabled(true)}
                onMouseLeave={() => setMouseScrollDisabled(false)}
              >
                {teamsStatus === "success" ? (
                  teams &&
                  teams?.map((team: Team, idx) => (
                    <Box
                      key={idx}
                      ref={(ref) => {
                        latestTeamsRefs.current[idx] = ref
                      }}
                    >
                      <LatestTeam team={team} />
                    </Box>
                  ))
                ) : (
                  <Typography>Loading...</Typography>
                )}
              </LatestTeamsStack>
            </Stack>
            <Stack direction="row" spacing={3}>
              <ScrollLeft
                scrolledValue={scrolledTeam}
                setScrolledValue={setScrolledTeam}
                refs={latestTeamsRefs}
                containerRef={latestTeamsContainerRef}
              />
              <ScrollRight
                scrolledValue={scrolledTeam}
                setScrolledValue={setScrolledTeam}
                refs={latestTeamsRefs}
                containerRef={latestTeamsContainerRef}
              />
            </Stack>
            {isMobile && (
              <Link href="/quests">
                <Button variant="contained" sx={{ height: "2.5rem" }}>
                  <Typography variant="body2" sx={{ textTransform: "none" }}>
                    View all teams
                  </Typography>
                </Button>
              </Link>
            )}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}
