import { Box, Typography } from "@mui/material"
import Link from "next/link"
import Image from "next/image"

export const Logo = () => {
  return (
    <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/guilds-logo.svg"
          width={36}
          height={36}
          alt="Guilds Logo"
        />
        <Typography variant="h6" sx={{ ml: 0.8, fontWeight: 700 }}>
          Guilds
        </Typography>
      </Box>
    </Link>
  )
}
