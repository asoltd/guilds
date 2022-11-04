import { Button, Stack, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Image from "next/image"

export function UnderMaintenance() {
  return (
    <Stack
      direction="row"
      spacing={{ xs: 0, sm: 0, md: 0, lg: 10, xl: 10 }}
      sx={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        },
        mt: 10,
      }}
    >
      <Stack spacing={3}>
        <Stack spacing={1}>
          <Typography variant="body1" color="primary.main">
            404 error
          </Typography>
          <Typography variant="h3">Under maintenance</Typography>
        </Stack>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: "25rem" }}
        >
          Sorry, the page you are looking for doesn't exist or has been moved.
          Try searching our site:
        </Typography>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Search our site"
            type="text"
            sx={{
              "& .MuiOutlinedInput-root": {
                width: "17rem",
              },
            }}
          />
          <Button variant="contained">Search</Button>
        </Stack>
      </Stack>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          },
        }}
      >
        <Image src="/404.svg" width={500} height={180} alt="404 error" />
      </Box>
    </Stack>
  )
}
