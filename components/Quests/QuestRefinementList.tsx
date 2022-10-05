import { Highlight, connectRefinementList } from "react-instantsearch-dom"
import _ from "lodash"
import { Box, ListItemButton, ListItemText } from "@mui/material"

function RefinementList({ items, refine }) {
  const sortedItems = _.orderBy(items, ["count", "label"], ["desc", "asc"])

  return (
    <Box>
      {sortedItems.length > 0 &&
        sortedItems.map((item) => (
          <ListItemButton sx={{}} onClick={() => refine(item.value)}>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
    </Box>
  )
}

export const QuestRefinementList = connectRefinementList(RefinementList)
