import Image from "next/image"
import { LinkColumns } from "./LinkColumns"
import { Stack, Divider, Typography } from "@mui/material"

export function FooterLogo() {
  return (
    <Stack>
      <Stack direction="row" height="80%">
        <Stack spacing={4} width="20rem">
          <Stack direction="row" alignItems="center" spacing={1}>
            <Image
              src="/GuildsLogo2.svg"
              alt="Guilds Logo"
              width={32}
              height={32}
            />
            <Typography
              variant="h5"
              sx={{ color: "background.default", fontWeight: 700 }}
            >
              Guilds
            </Typography>
          </Stack>
          <Typography sx={{ color: "background.default", pr: 3 }}>
            Design amazing digital experiences that create more happy in the
            world
          </Typography>
        </Stack>
        <LinkColumns />
      </Stack>
      <Divider
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode == "light" ? "text.secondary" : "primary.main",
          mt: "5rem",
        }}
      />
    </Stack>
  )
}
