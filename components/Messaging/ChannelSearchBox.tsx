import Image from "next/image"
import { InputAdornment, Stack, TextField } from "@mui/material"

export function ChannelSearchBox(props) {
  return (
    <Stack alignItems="center" p="1.5rem" bgcolor="background.paper">
      <TextField
        size="small"
        variant="outlined"
        type="search"
        value={props.searchQuery}
        onChange={props.setSearchQuery}
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Image src="/search.svg" width={20} height={20} alt="Search" />
            </InputAdornment>
          ),
        }}
        sx={{
          borderRadius: "1rem",
          ".MuiOutlinedInput-root": {
            borderRadius: "0.5rem",
            height: "2.7rem",
            bgcolor: "background.default",
          },
        }}
      />
    </Stack>
  )
}
