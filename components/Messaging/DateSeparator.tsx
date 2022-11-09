import { Divider, Stack, Typography } from "@mui/material"
import dateformat from "dateformat"

export function CustomDateSeparator(props) {
  const { date } = props
  const formattedDate = dateformat(date, "fullDate")
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Divider sx={{ flexGrow: 1 }} />
      <Typography px="0.5rem" color="primary.main" variant="body2">
        {formattedDate}
      </Typography>
      <Divider sx={{ flexGrow: 1 }} />
    </Stack>
  )
}
