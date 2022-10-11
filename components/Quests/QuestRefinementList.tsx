import { connectRefinementList } from "react-instantsearch-dom"
import _ from "lodash"
import { Box, ListItemButton, ListItemText, Stack } from "@mui/material"

interface Item {
  label: string
  value: string
  count: number
  isRefined: boolean
}

function RefinementList({ items, refine, currentRefinement }) {
  const sortedItems = _.orderBy(items, ["label"], ["desc", "asc"])
  console.log("currentRefinemnet", currentRefinement)
  return (
    <Stack spacing={2} width={"13rem"}>
      <Box
        sx={{
          bgcolor: !currentRefinement.length
            ? "primary.main"
            : "background.main",
        }}
      >
        <ListItemButton onClick={() => refine([])}>
          <ListItemText primary={"View all"} />
        </ListItemButton>
      </Box>
      {sortedItems.length > 0 &&
        sortedItems.map((item: Item, idx) => (
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
