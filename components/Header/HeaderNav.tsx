import { MenuItem, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Link from "next/link"
import { type Page } from "./Header"

interface Props {
  pages: Page[]
}

export const HeaderNav = ({ pages }: Props) => {
  return (
    <Box sx={{ display: "flex" }}>
      {pages.map((page) => (
        <MenuItem key={page.name}>
          <Link
            href={page.path}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography textAlign="center">{page.name}</Typography>
          </Link>
        </MenuItem>
      ))}
    </Box>
  )
}
