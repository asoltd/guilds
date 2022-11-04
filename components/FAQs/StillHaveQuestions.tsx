import { Stack, Container, Typography, Button } from "@mui/material"
import Image from "next/image"

export function StillHaveQuestions() {
  return (
    <Container
      sx={{ borderRadius: 3, backgroundColor: "background.paper", p: 3 }}
    >
      <Stack alignItems="center">
        <Image
          src="/rounded-face-pics.svg"
          alt="Rounded face pics"
          height={100}
          width={140}
        />
        <Typography variant="h6" sx={{ mb: 1 }}>
          Still have questions?
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mb: 2, fontSize: "1rem" }}
        >
          Can't find the answers you're looking for? Please reach out to our
          friendly team.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2, height: "3rem", textTransform: "none", borderRadius: 2 }}
        >
          Get in touch
        </Button>
      </Stack>
    </Container>
  )
}
