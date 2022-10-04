import { Header } from "../components/Header"

import { Footer } from "../components/Footer"
import { Container, Box } from "@mui/material"
import { Quests } from "components/Quests/Quests"

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
