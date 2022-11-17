import MenuIcon from "@mui/icons-material/Menu"
import Link from "next/link"
import { useState, MouseEvent } from "react"
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material"
import { NavigationColumn } from "../../navigation"

interface NavMenuProps {
  pages: NavigationColumn
}

export const NavMenu = ({ pages }: NavMenuProps) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  return (
    <Box>
      <Tooltip title="Menu">
        <IconButton
          size="large"
          edge="start"
          aria-label="menu"
          aria-controls="menu-appbar"
          onClick={handleOpenNavMenu}
        >
          <MenuIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: {
            sm: "block",
            md: "none",
          },
        }}
      >
        {pages.navigationItem.map((page) => (
          <MenuItem key={page.href} onClick={handleCloseNavMenu}>
            <Link
              href={page.href}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                textAlign="center"
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
      </Menu>
    </Box>
  )
}
