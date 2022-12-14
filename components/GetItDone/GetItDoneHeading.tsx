import { Button, Stack, Typography } from "@mui/material"

export function GetItDoneHeading() {
  return (
    <Stack
      justifyContent="center"
      py="3rem"
      pl="3rem"
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
        <Button
          variant="outlined"
          sx={{
            bgcolor: "white",
            color: "grey.800",
            borderColor: "white",
            borderRadius: "0.5rem",
            textTransform: "none",
            height: "2.5rem",
            "&:hover": {
              backgroundColor: "white",
            },
          }}
        >
          Learn more
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#50915B",
            color: "white",
            borderRadius: "0.5rem",
            textTransform: "none",
            height: "2.5rem",
            "&:hover": {
              backgroundColor: "#50915B",
            },
          }}
        >
          Get started
        </Button>
      </Stack>
    </Stack>
  )
}
