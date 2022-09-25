import { Container, Box } from "@mui/material"

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { SignIn } from "../components/SignIn"

export default function Login() {
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
        <SignIn />
      </Container>
      <Footer />
    </Box>
  )
}
