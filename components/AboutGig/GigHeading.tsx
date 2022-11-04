import { Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { headingInput } from "./UserInput"

export function GigHeading() {
  return (
    <Stack>
      <Stack spacing={3}>
        <Stack spacing={1}>
          <Typography
            variant="body1"
            sx={{ color: "primary.main", fontWeight: "600" }}
          >
            Level {headingInput.questLevel} Quest
          </Typography>
          <Typography variant="h3">About {headingInput.gigName} </Typography>
        </Stack>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Summary about {headingInput.gigName}.
        </Typography>
      </Stack>
    </Stack>
  )
}
