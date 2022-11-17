import { MenuItem, Stack, Typography } from "@mui/material"
import Link from "next/link"
import { NavigationColumn } from "../../navigation"

interface HeaderNavProps {
  pages: NavigationColumn
}

export const HeaderNav = ({ pages }: HeaderNavProps) => {
  return (
    <Stack direction="row">
      {pages.navigationItem.map((page) => (
        <MenuItem key={page.href}>
          <Link
            href={page.href}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography
              textAlign="center"
              fontWeight={500}
              variant="body2"
              color={(theme) =>
                theme.palette.mode == "light"
                  ? theme.palette.grey[600]
                  : theme.palette.grey[300]
              }
            >
              {page.label}
            </Typography>
          </Link>
        </MenuItem>
      ))}
    </Stack>
  )
}
