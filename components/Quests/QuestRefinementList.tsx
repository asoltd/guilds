import { Highlight, connectRefinementList } from "react-instantsearch-dom"
import _ from "lodash"
import { Box, List, ListItemButton, ListItemText } from "@mui/material"

function RefinementList({ items, refine }) {
  const sortedItems = _.orderBy(items, ["count", "label"], ["desc", "asc"])

  return (
    <List
      sx={{
        height: "50rem",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      {sortedItems.length > 0 &&
        sortedItems.map((item) => (
          <Box
            sx={{
              bgcolor: item.isRefined ? "primary.main" : "background.main",
              color: item.isRefined ? "background.paper" : "background.main",
            }}
          >
            <ListItemButton onClick={() => refine(item.value)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </Box>
        ))}
    </List>
  )
}

export const QuestRefinementList = connectRefinementList(RefinementList)
