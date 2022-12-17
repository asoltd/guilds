import { MenuItem, Stack, Typography } from "@mui/material"
import { AboutUsDropdown } from "components/AboutUsDropdown"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { NavigationColumn } from "../../navigation"

interface HeaderNavProps {
  pages: NavigationColumn
}

export const HeaderNav = ({ pages }: HeaderNavProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Stack direction="row">
      {pages.navigationItem.map((page) => (
        <MenuItem key={page.href}>
          {page.navigations ? (
            <Stack>
              <button
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                style={{
                  all: "unset",
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
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
                  <Image
                    src="/arrow-up.svg"
                    width={10}
                    height={10}
                    alt="arrow up"
                  />
                </Stack>
              </button>
              <AboutUsDropdown
                handleClose={handleClose}
                open={open}
                anchorEl={anchorEl}
                navigations={page.navigations}
              />
            </Stack>
          ) : (
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
          )}
        </MenuItem>
      ))}
    </Stack>
  )
}
