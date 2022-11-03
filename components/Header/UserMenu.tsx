import { useState, MouseEvent } from "react"
import {
  IconButton,
  Typography,
  Box,
  Tooltip,
  Menu,
  MenuItem,
  Avatar,
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
          <Link
            href="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography textAlign="center">Login</Typography>
          </Link>
        )}
      </Tooltip>
    </Box>
  )
}
