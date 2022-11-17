import { useState, MouseEvent } from "react"
import {
  IconButton,
  Typography,
  Box,
  Tooltip,
  Menu,
  MenuItem,
  Avatar,
  Stack,
  Button,
} from "@mui/material"
import { useAuth, useSigninCheck } from "reactfire"
import Link from "next/link"

export const UserMenu = () => {
  const auth = useAuth()
  const { data: signInCheckResult } = useSigninCheck()
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const settings = ["Dashboard", "Profile", "Account", "Logout"]

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <Box>
      <Tooltip title="Settings">
        {signInCheckResult?.signedIn ? (
          <Box>
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
                    <Typography onClick={() => auth.signOut()}>
                      Logout
                    </Typography>
                  ) : (
                    <Typography textAlign="center">{setting}</Typography>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        ) : (
          <Stack direction="row" spacing={3}>
            <Link
              href="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button sx={{ height: "3rem", borderRadius: "0.5rem" }}>
                <Typography
                  textAlign="center"
                  fontWeight={500}
                  textTransform="none"
                  px="0.6rem"
                  variant="body1"
                  color={(theme) =>
                    theme.palette.mode == "light"
                      ? theme.palette.grey[600]
                      : theme.palette.grey[300]
                  }
                >
                  Log in
                </Typography>
              </Button>
            </Link>
            <Link
              href="/signup"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button
                variant="contained"
                sx={{ height: "3rem", borderRadius: "0.5rem" }}
              >
                <Typography
                  textAlign="center"
                  textTransform="none"
                  px="0.6rem"
                  fontWeight={500}
                  variant="body1"
                >
                  Sign up
                </Typography>
              </Button>
            </Link>
          </Stack>
        )}
      </Tooltip>
    </Box>
  )
}
