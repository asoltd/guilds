import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import {
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material"

const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sat", "Su"]

export function SmallDatePicker() {
  return (
    <Stack maxWidth="17rem" border=" 1px solid #F2F4F7" borderRadius="0.5rem">
      <Stack spacing={1} p={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButton>
            <KeyboardArrowLeft />
          </IconButton>
          <Typography>Month Year</Typography>
          <IconButton>
            <KeyboardArrowRight />
          </IconButton>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <TextField
            placeholder="Select Date"
            sx={{
              "& .MuiOutlinedInput-root": {
                width: "9rem",
                height: "2.5rem",
                borderRadius: "0.5rem",
                textAlign: "center",
              },
            }}
          />
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              width: "5rem",
              color: (theme) => theme.palette.grey[800],
              borderRadius: "0.5rem",
              borderColor: (theme) => theme.palette.grey[400],
              height: "2.5rem",
            }}
          >
            Today
          </Button>
        </Stack>
        <Stack direction="row" spacing={1} justifyContent="space-between" p={1}>
          {weekDays.map((day) => (
            <Typography
              key={day}
              variant="body2"
              color={(theme) => theme.palette.grey[800]}
            >
              {day}
            </Typography>
          ))}
        </Stack>
      </Stack>
      <Divider />
      <Stack spacing={1} p={2}>
        <Stack direction="row" justifyContent="space-between">
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              width: "7rem",
              color: (theme) => theme.palette.grey[800],
              borderRadius: "0.5rem",
              borderColor: (theme) => theme.palette.grey[400],
              height: "2.5rem",
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              width: "7rem",
              borderRadius: "0.5rem",
              height: "2.5rem",
            }}
          >
            Apply
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
