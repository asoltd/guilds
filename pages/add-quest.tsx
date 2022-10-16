import { AddQuest } from "components/AddQuestForm"
import { Box, Container } from "@mui/material"
import { Header } from "components/Header"
import { QuestPanel } from "components/HirerStatsTabs/QuestTab"

export default function addQuest() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Container>
        <AddQuest />
        <QuestPanel />
      </Container>
    </Box>
  )
}
