import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import { Button, IconButton, Stack, TextField, Typography } from "@mui/material"

export function SmallDatePicker() {
  return (
    <Stack p={2} maxWidth="18rem" spacing={1} border={1}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <IconButton>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <Typography>Month 2023</Typography>
        <IconButton>
          <KeyboardArrowRightIcon />
        </IconButton>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        height="2.5rem"
      >
        <TextField
          placeholder="Select date"
          sx={{
            "& .MuiOutlinedInput-root": {
              width: "10rem",
              textAlign: "center",
              height: "2.5rem",
              borderRadius: "0.5rem",
            },
          }}
        />
        <Button
          variant="outlined"
          sx={{
            color: (theme) => theme.palette.grey[700],
            borderColor: (theme) => theme.palette.grey[300],
            borderRadius: "0.5rem",
            height: "2.5rem",
            textTransform: "none",
          }}
        >
          Today
        </Button>
      </Stack>
    </Stack>
  )
}
