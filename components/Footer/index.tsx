import { Box, Typography, Container, Stack } from "@mui/material"
import { Subscribe } from "./Subscribe"
import { Socials } from "./Socials"
import { FooterLogo } from "./FooterLogo"

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{ mt: "auto", display: { xs: "none", sm: "none", md: "block" } }}
    >
      <Stack>
        <Box sx={{ bgcolor: "secondary.main" }}>
          <Container>
            <Stack spacing={2} height="11rem" justifyContent="center">
              <Stack
                direction="row"
                justifyContent="space-between"
                minHeight="2.8rem"
              >
                <Typography
                  variant="h4"
                  color="background.default"
                  fontWeight={600}
                >
                  Get notified when we launch
                </Typography>
                <Subscribe />
              </Stack>
              <Typography
                variant="h6"
                color="background.default"
                fontWeight={400}
              >
                Stay up to date with the latest news, announcements and articles
              </Typography>
            </Stack>
          </Container>
        </Box>
        <Box height="30rem" sx={{ bgcolor: "secondary.light" }}>
          <Container sx={{ mt: "3rem" }}>
            <FooterLogo />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              height="6rem"
            >
              <Typography
                color={(theme) =>
                  theme.palette.mode == "light" ? "text.secondary" : "initial"
                }
                fontWeight={400}
              >
                © 2022 Guilds. All rights reserved.
              </Typography>
              <Socials />
            </Stack>
          </Container>
        </Box>
      </Stack>
    </Box>
  )
}
