import { Header } from "../components/Header"
import { Container, Box } from "@mui/material"
import { Footer } from "../components/Footer"
import { BecomeMentor } from "../components/BecomeMentor"

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
        <BecomeMentor />
      </Container>
      <Footer />
    </Box>
  )
}
