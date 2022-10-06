import { connectRefinementList } from "react-instantsearch-dom"
import _ from "lodash"
import { Box, ListItemButton, ListItemText, Stack } from "@mui/material"

function RefinementList({ items, refine }) {
  const sortedItems = _.orderBy(items, ["count", "label"], ["desc", "asc"])

  return (
    <Stack spacing={2}>
      {sortedItems.length > 0 &&
        sortedItems.map((item, idx) => (
          <Box
            sx={{
              bgcolor: item.isRefined ? "primary.main" : "background.main",
            }}
            key={idx}
          >
            <ListItemButton onClick={() => refine(item.value)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </Box>
        ))}
    </Stack>
  )
}

export const QuestRefinementList = connectRefinementList(RefinementList)
