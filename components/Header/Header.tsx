import { AppBar, Box, Divider, Container, Stack } from "@mui/material"

import { HeaderNav } from "./HeaderNav"
import { NavMenu } from "./NavMenu"
import { Logo } from "./Logo"
import { UserMenu } from "./UserMenu"
import { navigation } from "../../navigation"

export function Header(): JSX.Element {
  return (
    <>
      <AppBar
        position="static"
        sx={{ bgcolor: "background.default", boxShadow: "none" }}
      >
        <Container>
          <Stack direction="row" alignItems="center" height="5rem">
            <Box
              display={{
                sm: "block",
                md: "none",
              }}
            >
              <NavMenu pages={navigation.quickLinks} />
            </Box>
            <Box flexGrow={{ xs: 1, sm: 1, md: 0.5 }} display={{ md: "flex" }}>
              <Logo />
            </Box>
            <Stack
              direction="row"
              display={{
                xs: "none",
                sm: "none",
                md: "flex",
              }}
              flexGrow={2}
              height="100%"
            >
              <HeaderNav pages={navigation.quickLinks} />
            </Stack>
            <UserMenu />
          </Stack>
        </Container>
      </AppBar>
      <Divider />
    </>
  )
}
