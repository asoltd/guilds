import Image from "next/image"
import SearchIcon from "@mui/icons-material/Search"
import {
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material"
import { Box } from "@mui/system"

export function UnderMaintenance() {
  return (
    <Stack
      p="5rem"
      direction="row"
      spacing={{ xs: 0, sm: 0, md: 7, lg: 10, xl: 10 }}
      sx={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: {
          xs: "column-reverse",
          sm: "column-reverse",
          md: "row",
          lg: "row",
          xl: "row",
        },
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
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
            xs: "block",
            sm: "block",
            md: "block",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <Image src="/404.svg" width={400} height={180} alt="404 error" />
      </Box>
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
