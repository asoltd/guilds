import { AddQuest } from "components/Quests/AddQuest"
import { Box, Container } from "@mui/material"
import { Header } from "components/Header"

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
      </Container>
    </Box>
  )
}
