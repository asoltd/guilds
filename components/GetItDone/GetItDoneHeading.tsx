import { Stack, Typography } from "@mui/material"
import { GreenButton } from "components/GreenButton"
import { WhiteButton } from "components/WhiteButton"

export function GetItDoneHeading() {
  return (
    <Stack
      justifyContent="center"
      py="3rem"
      pl="3rem"
      pr="0.5rem"
      width="100%"
      spacing={3}
      color="white"
      sx={{
        backgroundColor: "primary.main",
      }}
    >
      <Typography variant="h3" mb="-0.5rem" maxWidth="sm">
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
