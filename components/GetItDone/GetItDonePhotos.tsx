import Image from "next/image"
import { Stack } from "@mui/material"

export function GetItDonePhotos() {
  return (
    <Stack
      spacing={1}
      py="3rem"
      pr="3rem"
      pl="0.5rem"
      sx={{
        backgroundColor: "primary.main",
      }}
    >
      <Stack
        direction="row"
        alignItems="end"
        justifyContent="center"
        spacing={1}
      >
        <Image src="/get-it-done-1.svg" width={160} height={160} alt="image1" />
        <Image src="/get-it-done-2.svg" width={160} height={240} alt="image2" />
      </Stack>
      <Stack direction="row" alignItems="start" spacing={1}>
        <Image src="/get-it-done-3.svg" width={192} height={128} alt="image3" />
        <Image src="/get-it-done-4.svg" width={160} height={240} alt="image4" />
        <Image src="/get-it-done-5.svg" width={192} height={128} alt="image5" />
      </Stack>
    </Stack>
  )
}
