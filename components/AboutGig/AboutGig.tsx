import { Typography, Stack, useMediaQuery } from "@mui/material"
import { Quest } from "types/quest"
import { useTheme } from "@mui/material/styles"

interface QuestProps {
  quest: Quest
}

export function AboutGig({ quest }: QuestProps) {
  const theme = useTheme()
  const isMedium = useMediaQuery(theme.breakpoints.down("lg"))

  return (
    <Stack spacing={4} alignItems="start">
      <Stack spacing={3} p={isMedium ? "1.5rem" : "0"}>
        <Stack spacing={1}>
          <Typography variant="body1" color=" primary.main" fontWeight="600">
            Level {quest.level} Quest
          </Typography>
          <Typography variant="h3" maxWidth="sm">
            About {quest.title}
          </Typography>
        </Stack>
        <Typography variant="body1" color="text.secondary" maxWidth="sm">
          {quest.summary}
        </Typography>
      </Stack>
      <Typography
        variant="body1"
        color="text.secondary"
        lineHeight="1.8rem"
        p={isMedium ? "1.5rem" : "0"}
        sx={{
          columnCount: { xs: 1, sm: 1, md: 2, lg: 2, xl: 2 },
          columnGap: 4,
          columnWidth: "50%",
          textAlign: "justify",
        }}
      >
        {quest.description}
      </Typography>
    </Stack>
  )
}
