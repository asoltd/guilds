import Image from "next/image"
import { Stack, useMediaQuery, useTheme } from "@mui/material"

export function GetItDonePhotos() {
  const theme = useTheme()
  const isVeryLarge = useMediaQuery(theme.breakpoints.up("xl"))
  const isLarge = useMediaQuery(theme.breakpoints.up("md"))
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Stack
      spacing={1}
      pb={isMobile ? "8rem" : "3rem"}
      pt={isMobile ? "3rem" : "3rem"}
      pr={isVeryLarge ? "20%" : isLarge ? "15%" : isMobile ? "0%" : "0%"}
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
      <Stack
        direction="row"
        alignItems="start"
        justifyContent="center"
        spacing={1}
      >
        <Image src="/get-it-done-3.svg" width={192} height={128} alt="image3" />
        <Image src="/get-it-done-4.svg" width={160} height={240} alt="image4" />
        <Image src="/get-it-done-5.svg" width={192} height={128} alt="image5" />
      </Stack>
    </Stack>
  )
}
