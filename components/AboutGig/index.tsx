import { Stack } from "@mui/system"
import { GigDescription } from "./GigDescription"
import { GigHeading } from "./GigHeading"

export function AboutGig() {
  return (
    <Stack spacing={7}>
      <GigHeading />
      <GigDescription />
    </Stack>
  )
}
