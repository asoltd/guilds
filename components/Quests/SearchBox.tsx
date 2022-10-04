import { connectSearchBox } from "react-instantsearch-dom"
import { Box, Input, Button } from "@mui/material"

function SearchBox({ currentRefinement, refine }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "90%",
        margin: "auto",
      }}
    >
      <Input
        type="search"
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
        sx={{ width: "80%" }}
      />
      <Button variant="contained" onClick={() => refine("")}>
        clear
      </Button>
    </Box>
  )
}

export const QuestSearchBox = connectSearchBox(SearchBox)
