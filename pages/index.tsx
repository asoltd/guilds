import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Container, Box } from "@mui/material"
import { DoughnutChart } from "../components/BountiesDoughnutChart"

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
