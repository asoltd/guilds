import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Quests } from "components/QuestSearch"
import { Container, Box } from "@mui/material"

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Container>
        <Quests />
      </Container>
      <Footer />
    </Box>
  )
}
