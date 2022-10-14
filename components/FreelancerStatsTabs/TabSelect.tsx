import { Tabs, Tab } from "@mui/material"
import { SyntheticEvent } from "react"

interface TabSelectProps {
  value: number
  setValue: (value: number) => void
}

export function TabSelect({ value, setValue }: TabSelectProps) {
  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    }
  }

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="basic tabs example"
      orientation="vertical"
    >
      <Tab label="Quests Stats" {...a11yProps(0)} />
      <Tab label="Profile Stats" {...a11yProps(1)} />
      <Tab label="Experience & Reviews" {...a11yProps(2)} />
    </Tabs>
  )
}
