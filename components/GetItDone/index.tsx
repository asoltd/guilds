import { Stack, useMediaQuery, useTheme } from "@mui/material"
import { GetItDoneHeading } from "./GetItDoneHeading"
import { GetItDonePhotos } from "./GetItDonePhotos"

export function GetItDone() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <Stack direction={isMobile ? "column" : "row"}>
      <GetItDoneHeading />
      <GetItDonePhotos />
    </Stack>
  )
}
