import { Button, Typography } from "@mui/material"

export default function GrayButton({ label }: { label: string }) {
  return (
    <Button
      variant="outlined"
      sx={{
        width: "7rem",
        height: "3rem",
        color: "text.primary",
        borderColor: (theme) => theme.palette.grey[300],
        borderRadius: "0.5rem",
        textTransform: "none",
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 600 }}>
        {label}
      </Typography>
    </Button>
  )
}
