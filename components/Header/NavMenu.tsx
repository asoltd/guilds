import MenuIcon from "@mui/icons-material/Menu"
import { useState, MouseEvent } from "react"
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material"
import Link from "next/link"
import { Page } from "./Header"

interface Props {
  pages: Page[]
}

export const NavMenu = ({ pages }: Props) => {
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
          color="inherit"
          aria-label="menu"
          aria-controls="menu-appbar"
          sx={{ mr: 2 }}
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
        {pages.map((page) => (
          <MenuItem key={page.name} onClick={handleCloseNavMenu}>
            <Link
              href={page.path}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography textAlign="center">{page.name}</Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}
