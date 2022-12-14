import { Stack } from "@mui/material"
import { GetItDoneHeading } from "./GetItDoneHeading"
import { GetItDonePhotos } from "./GetItDonePhotos"

export function GetItDone() {
  return (
    <Stack direction="row">
      <GetItDoneHeading />
      <GetItDonePhotos />
    </Stack>
  )
}
