import { Quest } from "components/Quest"
import { Box, Container } from "@mui/material"
import { Header } from "components/Header"

export default function quest() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Container>
        <Quest />
      </Container>
    </Box>
  )
}
