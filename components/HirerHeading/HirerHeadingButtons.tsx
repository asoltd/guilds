import { Button, Stack, Typography } from "@mui/material"
import Image from "next/image"

export function HirerHeadingButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        sx={{
          height: "3rem",
          borderRadius: "0.5rem",
          px: "1.5rem",
          borderColor: (theme) => theme.palette.grey[300],
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Image
            src="/play-circle.svg"
            alt="play circle"
            width={20}
            height={20}
          />
          <Typography
            textTransform="none"
            color={(theme) => theme.palette.grey[700]}
          >
            Demo
          </Typography>
        </Stack>
      </Button>
      <Button
        variant="contained"
        sx={{ height: "3rem", borderRadius: "0.5rem", px: "1.5rem" }}
      >
        <Typography textTransform="none">Sign up</Typography>
      </Button>
    </Stack>
  )
}
