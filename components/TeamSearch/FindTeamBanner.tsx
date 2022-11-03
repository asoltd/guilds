import { Stack, Typography } from "@mui/material"
import { Container } from "@mui/system"

export function FindTeamBanner() {
  return (
    <Stack
      sx={{
        background: "#F9FAFB",
        mb: "4rem",
      }}
    >
      <Container>
        <Stack
          spacing={2}
          direction={"column"}
          justifyContent={"center"}
          height={"20rem"}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, color: "primary.main" }}
          >
            Your journey awaits you
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 600 }}>
            Find a new team
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            All of the teams currently looking for team members
          </Typography>
        </Stack>
      </Container>
    </Stack>
  )
}
