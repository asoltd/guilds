import dayjs, { Dayjs } from "dayjs"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker"
import { useState } from "react"
import { Button, Divider, Stack } from "@mui/material"

export function SmallDatePicker() {
  const currentDate = dayjs()
  const [date, setDate] = useState<Dayjs | null>(dayjs(currentDate))

  return (
    <Stack
      bgcolor="background.default"
      border={1}
      borderRadius="0.5rem"
      maxWidth="21rem"
      borderColor={(theme) => theme.palette.grey[300]}
      boxShadow="0px 20px 24px -4px #10182814"
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack mb="-2rem">
          <CalendarPicker
            date={date}
            onChange={(newDate) => setDate(newDate)}
          />
        </Stack>
      </LocalizationProvider>
      <Divider />
      <Stack
        direction="row"
        justifyContent="space-between"
        padding={2}
        spacing={2}
      >
        <Button
          onClick={() => setDate(dayjs(currentDate))}
          variant="outlined"
          sx={{
            borderRadius: "0.5rem",
            borderColor: (theme) => theme.palette.grey[400],
            color: (theme) => theme.palette.grey[800],
            textTransform: "none",
            flexGrow: 1,
            height: "2.5rem",
            "&:hover": {
              borderColor: (theme) => theme.palette.grey[600],
            },
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{
            borderRadius: "0.5rem",
            borderColor: (theme) => theme.palette.grey[400],
            textTransform: "none",
            flexGrow: 1,
            height: "2.5rem",
          }}
        >
          Apply
        </Button>
      </Stack>
    </Stack>
  )
}
