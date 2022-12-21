import { Button, Typography } from "@mui/material"

export function GreenButton({ children }) {
  return (
    <Button variant="contained" sx={{ height: "3rem", borderRadius: "0.6rem" }}>
      <Typography
        textAlign="center"
        textTransform="none"
        px="0.6rem"
        fontWeight={500}
        variant="body1"
      >
        {children}
      </Typography>
    </Button>
  )
}

export function WhiteButton({ children }) {
  return (
    <Button
      variant="outlined"
      sx={{
        height: "3rem",
        borderRadius: "0.6rem",
        borderColor: (theme) => theme.palette.grey[300],
        bgcolor: "background.default",
      }}
    >
      <Typography
        textAlign="center"
        textTransform="none"
        px="0.6rem"
        fontWeight={500}
        variant="body1"
        color={(theme) => theme.palette.grey[700]}
      >
        {children}
      </Typography>
    </Button>
  )
}
