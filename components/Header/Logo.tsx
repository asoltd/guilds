import Link from "next/link"
import Image from "next/image"
import { Stack, Typography } from "@mui/material"

export const Logo = () => {
  return (
    <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Image
          src="/guilds-logo.svg"
          width={36}
          height={36}
          alt="Guilds Logo"
        />
        <Typography variant="h6" color="text.primary" fontWeight={700}>
          Guilds
        </Typography>
      </Stack>
    </Link>
  )
}
