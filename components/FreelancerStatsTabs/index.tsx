import { useState } from "react"
import { Box, Stack } from "@mui/material"
import { TabSelect } from "./TabSelect"
import { TabPanel } from "./TabPanel"
import { QuestTabPanel } from "./QuestTabPanel"

export function FreelancerStats() {
  const [value, setValue] = useState(0)

  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="row">
        <Box sx={{ borderRight: 1, borderColor: "divider", width: "10%" }}>
          <TabSelect value={value} setValue={setValue} />
        </Box>
        <Box sx={{ width: "50%" }}>
          <QuestTabPanel value={value} index={0} />
          <TabPanel value={value} index={1}>
            I love Yoni
          </TabPanel>
          <TabPanel value={value} index={2}>
            I love Yoni
          </TabPanel>
        </Box>
      </Stack>
    </Box>
  )
}
