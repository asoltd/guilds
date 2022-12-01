import styled from "@emotion/styled"
import _ from "lodash"
import { connectRefinementList } from "react-instantsearch-dom"
import { Box, ListItemButton, Stack, Typography } from "@mui/material"

interface Item {
  label: string
  value: string
  count: number
  isRefined: boolean
}

const CustomListItemButton = styled(ListItemButton)({
  borderRadius: "0.5rem",
})

function CustomRefinementList({ items, refine, currentRefinement, label }) {
  const sortedItems = _.orderBy(items, ["label"], ["desc", "asc"])

  const refinementItemStyle = (condition: boolean) => ({
    bgcolor: condition ? "primary.light" : "background.main",
    color: condition ? "primary.main" : "text.secondary",
    borderRadius: "0.5rem",
  })

  return (
    <Stack spacing={1} width={"18rem"}>
      <Typography
        variant="body2"
        sx={{ fontWeight: 600, color: "primary.main" }}
      >
        {label}
      </Typography>
      <Box sx={refinementItemStyle(!currentRefinement.length)}>
        <CustomListItemButton onClick={() => refine([])}>
          <Typography variant="body1">View all</Typography>
        </CustomListItemButton>
      </Box>
      {sortedItems.length > 0 &&
        sortedItems.map((item: Item, idx) => (
          <Box sx={refinementItemStyle(item.isRefined)} key={idx}>
            <CustomListItemButton onClick={() => refine(item.value)}>
              <Typography variant="body1">{item.label}</Typography>
            </CustomListItemButton>
          </Box>
        ))}
    </Stack>
  )
}

export const RefinementList = connectRefinementList(CustomRefinementList)
