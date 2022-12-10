import Image from "next/image"
import SearchIcon from "@mui/icons-material/Search"
import { useTheme } from "@mui/material/styles"
import {
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material"
import { GreenButton } from "../GreenButton"

export function UnderMaintenance() {
  const theme = useTheme()
  const isMedium = useMediaQuery(theme.breakpoints.down("lg"))
  const isSmall = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Box py="5rem">
      <Stack
        p="5rem"
        direction={isSmall ? "column-reverse" : "row"}
        alignItems="center"
        justifyContent="center"
        spacing={{ md: 7, lg: 10, xl: 10 }}
      >
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography variant="body1" color="primary.main">
              404 error
            </Typography>
            <Typography variant="h3">Under maintenance</Typography>
          </Stack>
          <Typography variant="body1" color="text.secondary" maxWidth="25rem">
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
            <GreenButton>Search</GreenButton>
          </Stack>
        </Stack>
        <Image
          src="/404.svg"
          width={isMedium ? 400 : 500}
          height={180}
          alt="404 error"
        />
      </Stack>
    </Box>
  )
}
