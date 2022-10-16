import { connectPagination } from "react-instantsearch-dom"
import { Pagination, Stack } from "@mui/material"

interface PaginationProps {
  currentRefinement: number
  nbPages: number
  refine: (page: number) => void
}

function _Pagination({ currentRefinement, nbPages, refine }: PaginationProps) {
  return (
    <Stack direction={"row"} justifyContent={"center"}>
      <Pagination
        count={nbPages}
        page={currentRefinement}
        onChange={(e, page) => refine(page)}
      />
    </Stack>
  )
}

export const QuestPagination = connectPagination(_Pagination)
