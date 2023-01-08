import { Header } from "../components/Header"
import { Container, Box } from "@mui/material"
import { Footer } from "../components/Footer"

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
      <Container></Container>
      <Footer />
    </Box>
  )
}
