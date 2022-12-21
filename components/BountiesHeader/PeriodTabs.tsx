import styled from "@emotion/styled"
import {
  ToggleButtonGroup,
  Stack,
  ToggleButton,
  Typography,
} from "@mui/material"
import { useState } from "react"

const PeriodButton = styled(ToggleButton)({
  textTransform: "none",
  borderRadius: "0.4rem",
  height: "2.3rem",
})

export function PeriodTabs() {
  const [alignment, setAlignment] = useState<string | null>("year")

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment != null) {
      setAlignment(newAlignment)
    }
  }

  return (
    <Stack direction="row" overflow="hidden">
      <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment}>
        <PeriodButton value="year">
          <Typography variant="body2">12 months</Typography>
        </PeriodButton>
        <PeriodButton value="month">
          <Typography variant="body2">30 days</Typography>
        </PeriodButton>
        <PeriodButton value="week">
          <Typography variant="body2">7 days</Typography>
        </PeriodButton>
        <PeriodButton value="day">
          <Typography variant="body2">24 hours</Typography>
        </PeriodButton>
      </ToggleButtonGroup>
    </Stack>
  )
}
