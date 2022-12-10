import { Button, Typography } from "@mui/material"

interface ButtonProps {
  children: JSX.Element | string
}

export function GreenButton({ children }: ButtonProps) {
  return (
    <Button
      variant="contained"
      sx={{
        height: "3rem",
        borderRadius: "0.6rem",
        bgcolor: "#50915B",
      }}
    >
      <Typography
        textAlign="center"
        textTransform="none"
        px="0.6rem"
        fontWeight={500}
        variant="body1"
        sx={{ textDecoration: "none" }}
      >
        {children}
      </Typography>
    </Button>
  )
}
