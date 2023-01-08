import { Header } from "../components/Header"
import { Container, Box } from "@mui/material"
import { Footer } from "../components/Footer"
import {NewBid} from '../components/NewBid'

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
      <Container><NewBid/></Container>
      <Footer />
    </Box>
  )
}
