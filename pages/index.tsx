import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Container, Box } from "@mui/material"
import { YourCards } from "components/YourCards/YourCards"

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
        <YourCards />
      </Container>
      <Footer />
    </Box>
  )
}
