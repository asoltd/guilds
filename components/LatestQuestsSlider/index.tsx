import styled from "styled-components"
import Link from "next/link"
import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, limit, orderBy, query } from "firebase/firestore"
import { Box, Stack, Button, Typography } from "@mui/material"
import { LatestQuest } from "./LatestQuest"
import { Quest } from "storage/quest"
import { useRef, useState } from "react"
import { ScrollLeft, ScrollRight } from "components/ScrollButtons"
import { Container } from "@mui/system"
import useMediaQuery from "@mui/material/useMediaQuery"

const LatestQuestsStack = styled(Stack)({
  "&::-webkit-scrollbar": {
    display: "none",
  },
})

export function LatestQuestsSlider() {
  const [scrolledQuest, setScrolledQuest] = useState(0)
  const [mouseScrollDisabled, setMouseScrollDisabled] = useState(false)
  const firestore = useFirestore()
  const questRef = collection(firestore, "quests")
  const questsQuery = query(questRef, orderBy("createdAt", "desc"), limit(20))
  const { status: questsStatus, data: quests } =
    useFirestoreCollectionData(questsQuery)

  const latestQuestsRefs = useRef([])

  const isMobile = useMediaQuery("(max-width: 600px)")

  return (
    <Stack spacing={4} alignItems="center" sx={{ overflow: "clip" }}>
      <Container>
        <Stack spacing={6}>
          <Stack direction="row" justifyContent="space-between">
            <Stack spacing={2}>
              <Typography variant="h4">Latest quests</Typography>
              <Typography variant={"body2"} color={"text.secondary"}>
                The latest quests that have been posted to Guilds
              </Typography>
            </Stack>
            {!isMobile && (
              <Link href="/quests">
                <Button variant="contained" sx={{ height: "2.5rem" }}>
                  <Typography variant="body2" sx={{ textTransform: "none" }}>
                    View all quests
                  </Typography>
                </Button>
              </Link>
            )}
          </Stack>
          <Stack spacing={6}>
            <LatestQuestsStack
              direction="row"
              sx={{
                overflow: mouseScrollDisabled ? "hidden" : "auto",
                pr: "500rem",
              }}
              onMouseEnter={() => setMouseScrollDisabled(true)}
              onMouseLeave={() => setMouseScrollDisabled(false)}
            >
              <Stack direction="row" spacing={0}>
                <Stack direction="row" spacing={3}>
                  {questsStatus === "success" ? (
                    quests &&
                    quests?.map((quest: Quest, idx) => (
                      <Box
                        key={idx}
                        ref={(ref) => {
                          latestQuestsRefs.current[idx] = ref
                        }}
                      >
                        <LatestQuest quest={quest} />
                      </Box>
                    ))
                  ) : (
                    <Typography>Loading...</Typography>
                  )}
                </Stack>
              </Stack>
              <Box width={"100vw"} />
            </LatestQuestsStack>
            <Stack direction="row" spacing={3}>
              <ScrollLeft
                scrolledValue={scrolledQuest}
                setScrolledValue={setScrolledQuest}
                refs={latestQuestsRefs}
              />
              <ScrollRight
                scrolledValue={scrolledQuest}
                setScrolledValue={setScrolledQuest}
                refs={latestQuestsRefs}
              />
            </Stack>
            {isMobile && (
              <Link href="/quests">
                <Button variant="contained" sx={{ height: "2.5rem" }}>
                  <Typography variant="body2" sx={{ textTransform: "none" }}>
                    View all quests
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
