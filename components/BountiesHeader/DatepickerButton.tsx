import Image from "next/image"
import { Stack, ToggleButton, Typography } from "@mui/material"
import { useState } from "react"

export default function DatepickerButton() {
  const [selected, setSelected] = useState<boolean>(false)

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected)
      }}
      sx={{ textTransform: "none", borderRadius: "0.4rem", height: "2.3rem" }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <Image src="/calendar.svg" width={20} height={20} alt="calendar" />
        <Typography variant="body2">Select dates</Typography>
      </Stack>
    </ToggleButton>
  )
}
