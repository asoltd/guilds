import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { connectPagination } from "react-instantsearch-dom"
import {
  Pagination as MaterialPagination,
  Stack,
  Button,
  Typography,
  Box,
} from "@mui/material"

interface PaginationProps {
  currentRefinement: number
  nbPages?: number
  refine: (page: number) => void
}

function PreviousPageButton({
  currentRefinement,
  nbPages,
  refine,
}: PaginationProps) {
  return (
    <Box>
      <Button
        variant="outlined"
        color="secondary"
        size="small"
        sx={{
          borderRadius: "0.5rem",
          textTransform: "none",
        }}
        onClick={() => refine(currentRefinement - 1)}
        disabled={currentRefinement == 1}
      >
        <Stack direction={"row"} spacing={2}>
          <ArrowBackIcon />
          <Typography>Previous</Typography>
        </Stack>
      </Button>
    </Box>
  )
}

function NextPageButton({
  currentRefinement,
  nbPages,
  refine,
}: PaginationProps) {
  return (
    <Box>
      <Button
        variant="outlined"
        color="secondary"
        size="small"
        sx={{ borderRadius: "0.5rem", textTransform: "none" }}
        onClick={() => refine(currentRefinement + 1)}
        disabled={currentRefinement == 10}
      >
        <Stack direction={"row"} spacing={2}>
          <Typography>Next</Typography>
          <ArrowForwardIcon />
        </Stack>
      </Button>
    </Box>
  )
}

function CustomPagination({
  currentRefinement,
  nbPages,
  refine,
}: PaginationProps) {
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <PreviousPageButton
        currentRefinement={currentRefinement}
        nbPages={nbPages}
        refine={refine}
      />
      <MaterialPagination
        count={10}
        page={currentRefinement}
        onChange={(e, page) => refine(page)}
        shape="rounded"
        siblingCount={1}
        boundaryCount={1}
        hidePrevButton
        hideNextButton
      />
      <NextPageButton
        currentRefinement={currentRefinement}
        nbPages={nbPages}
        refine={refine}
      />
    </Stack>
  )
}

export const Pagination = connectPagination(CustomPagination)
