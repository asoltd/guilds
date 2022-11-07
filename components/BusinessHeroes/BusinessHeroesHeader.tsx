import { Stack, Typography } from "@mui/material"

export function BusinessHeroesHeader() {
  return (
    <Stack spacing={2}>
      <Typography variant="body1" fontWeight={600} color="primary.main">
        Introducing Guilds
      </Typography>
      <Typography variant="h4" fontWeight={600}>
        3,000 heroes at your fingertips
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ maxWidth: "48rem" }}
      >
        A community of 3,000+ heroes are waiting at your command. Create a
        quest, choose a winning bidder and get the job done.
      </Typography>
    </Stack>
  )
}
