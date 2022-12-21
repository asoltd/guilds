import { Stack } from "@mui/material"
import DatepickerButton from "./DatepickerButton"
import { Header } from "./Header"
import { PeriodTabs } from "./PeriodTabs"

export interface HeaderProps {
  title: string
  caption: string
}

export function BountiesHeader({ title, caption }: HeaderProps) {
  return (
    <Stack spacing={3}>
      <Header title={title} caption={caption} />
      <Stack direction="row" justifyContent="space-between">
        <PeriodTabs />
        <DatepickerButton />
      </Stack>
    </Stack>
  )
}
