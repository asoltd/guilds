import { Typography } from "@mui/material"
import { Stack } from "@mui/system"

export function AboutGig({ quest }) {
  return (
    <Stack spacing={4} alignItems="start">
      <Stack spacing={3} p={{ xs: "1rem", sm: "1rem", md: "1rem" }}>
        <Stack spacing={1}>
          <Typography variant="body1" color=" primary.main" fontWeight="600">
            Level {quest?.level} Quest
          </Typography>
          <Typography
            variant="h3"
            maxWidth={{
              xs: "25rem",
              sm: "35rem",
            }}
          >
            About {quest?.title}
          </Typography>
        </Stack>
        <Typography variant="body1" color="text.secondary">
          {quest?.summary}
        </Typography>
      </Stack>
      <Typography
        variant="body1"
        color="text.secondary"
        lineHeight="1.8rem"
        p={{ xs: "1rem", sm: "1rem", md: "1rem" }}
        sx={{
          columnCount: { xs: 1, sm: 1, md: 2, lg: 2, xl: 2 },
          columnGap: 4,
          columnWidth: "50%",
        }}
      >
        {quest?.description}
      </Typography>
    </Stack>
  )
}
