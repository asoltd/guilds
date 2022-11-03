import Image from "next/image"
import styled from "styled-components"
import { connectSearchBox } from "react-instantsearch-dom"
import { Box, InputAdornment, TextField } from "@mui/material"

const CustomTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    border-radius: 0.5rem;
  }
`

function CustomSearchBox({ currentRefinement, refine }) {
  return (
    <Box>
      <CustomTextField
        size="small"
        variant="outlined"
        type="search"
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Image src="/search.svg" width={20} height={20} alt="Search" />
            </InputAdornment>
          ),
        }}
        sx={{ width: "18rem", borderRadius: "1rem" }}
      />
    </Box>
  )
}

export const SearchBox = connectSearchBox(CustomSearchBox)
