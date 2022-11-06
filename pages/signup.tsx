import { Container, Box } from "@mui/material"

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { SignUp } from "components/SignUp"

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
        <SignUp />
      </Container>
      <Footer />
    </Box>
  )
}
