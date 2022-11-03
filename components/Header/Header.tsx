import { AppBar, Box, Toolbar } from "@mui/material"

import { HeaderNav } from "./HeaderNav"
import { NavMenu } from "./NavMenu"
import { Logo } from "./Logo"
import { UserMenu } from "./UserMenu"

export interface Page {
  name: string
  path: string
}

export function Header(): JSX.Element {
  const pages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "FAQ", path: "/faq" },
  ]
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box
            sx={{
              display: {
                sm: "block",
                md: "none",
              },
            }}
          >
            <NavMenu pages={pages} />
          </Box>
          <Box
            sx={{
              flexGrow: { sm: 1, md: 0.5 },
              display: { md: "flex" },
              justifyContent: "center",
            }}
          >
            <Logo />
          </Box>
          <Box
            sx={{
              display: {
                sm: "none",
                md: "flex",
              },
              flexGrow: 2,
            }}
          >
            <HeaderNav pages={pages} />
          </Box>
          <UserMenu />
        </Toolbar>
      </AppBar>
    </>
  )
}
