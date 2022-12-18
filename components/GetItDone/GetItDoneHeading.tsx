import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material"
import { GreenButton } from "components/GreenButton"
import { WhiteButton } from "components/WhiteButton"

export function GetItDoneHeading() {
  const theme = useTheme()
  const isVeryLarge = useMediaQuery(theme.breakpoints.up("xl"))
  const isLarge = useMediaQuery(theme.breakpoints.up("md"))
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <Stack
      justifyContent="center"
      alignItems={isMobile ? "center" : "flex-start"}
      pt={isMobile ? "8rem" : "3rem"}
      pb={isMobile ? "3rem" : "3rem"}
      pl={isVeryLarge ? "20%" : isLarge ? "15%" : isMobile ? "0%" : "0%"}
      pr="0.5rem"
      width="100%"
      spacing={3}
      color="white"
      sx={{
        backgroundColor: "primary.main",
      }}
    >
      <Typography
        variant="h3"
        mb="-0.5rem"
        maxWidth="sm"
        textAlign={isMobile ? "center" : "left"}
      >
        Whatever it is, get it done quickly with Guilds.
      </Typography>
      <Typography variant="h6" color="primary.light">
        Create a quest today.
      </Typography>
      <Stack direction="row" spacing={1} pt={1}>
        <WhiteButton>Learn more</WhiteButton>
        <GreenButton>Get started</GreenButton>
      </Stack>
    </Stack>
  )
}
