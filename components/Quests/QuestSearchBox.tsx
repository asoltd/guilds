import { connectSearchBox } from "react-instantsearch-dom"
import { Box, Input, Button } from "@mui/material"

function SearchBox({ currentRefinement, refine }) {
  return (
    <Box>
      <Input
        type="search"
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
      />
    </Box>
  )
}

export const QuestSearchBox = connectSearchBox(SearchBox)
