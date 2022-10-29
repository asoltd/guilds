import { useState, MouseEvent } from "react"
// import Image from "next/image"
import {
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Button,
  CircularProgress,
  Box,
  Tooltip,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useRouter } from "next/router"
import { useAuth, useSigninCheck } from "reactfire"
import Link from "next/link"

export function Header(): JSX.Element {
  const auth = useAuth()
  const router = useRouter()
  const { status, data: signInCheckResult } = useSigninCheck()
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const pages = ["Guilds", "Heroes", "Quests", "Whatever", "Else"]
  const settings = ["Dashboard", "Profile", "Account", "Logout"]

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const LoginButton = () => (
    <Button color="inherit" onClick={() => router.push("/login")}>
      Login
    </Button>
  )

  return (
    <>
      <AppBar position="static">
        <Toolbar>
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
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link href="/">
              <a style={{ textDecoration: 'none', color: 'inherit' }}>
                Guilds
              </a>
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Settings">
              <>
                {status === "loading" ? (
                  <CircularProgress size={20} sx={{ color: "white" }} />
                ) : signInCheckResult.signedIn ? (
                  <>
                    <IconButton onClick={handleOpenUserMenu}>
                      <Avatar src={signInCheckResult.user.photoURL} />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      anchorEl={anchorElUser}
                      onClose={handleCloseUserMenu}
                      keepMounted
                    >
                      {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                          {setting === "Logout" ? (
                            <Button onClick={() => auth.signOut()}>
                              Logout
                            </Button>
                          ) : (
                            <Typography textAlign="center">
                              {setting}
                            </Typography>
                          )}
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                ) : (
                  <LoginButton />
                )}
              </>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
