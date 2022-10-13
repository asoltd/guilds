import { ReactNode, SyntheticEvent, useState } from "react"
import { QuestsStats } from "components/Tabs/QuestStats"
import { ProfileStats } from "components/Tabs/ProfileStats"
import { ExperienceAndReviews } from "components/Tabs/ExpirienceAndReviews.tsx"
import { Box, Tabs, Tab, Typography } from "@mui/material"
import styled from "styled-components"

interface TabPanelProps {
  children?: ReactNode
  index: number
  value: number
}
const Row = styled.div`
  display: flex;
  flex-direction: row;
`

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

export function Stats() {
  const [value, setValue] = useState(0)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Row>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "10%" }}>
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
        </Box>
        <Box sx={{ width: "90%" }}>
          <TabPanel value={value} index={0}>
            <QuestsStats />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ProfileStats />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ExperienceAndReviews />
          </TabPanel>
        </Box>
      </Row>
    </Box>
  )
}
