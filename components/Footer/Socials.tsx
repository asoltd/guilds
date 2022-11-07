import Link from "next/link"
import Image from "next/image"
import { Stack, Box } from "@mui/material"

export function Socials() {
  return (
    <Stack direction="row" spacing={3} alignItems="center">
      <Box sx={{ cursor: "pointer" }}>
        <Link href="#">
          <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
        </Link>
      </Box>
      <Box sx={{ cursor: "pointer" }}>
        <Link href="#">
          <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
        </Link>
      </Box>
      <Box sx={{ cursor: "pointer" }}>
        <Link href="#">
          <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
        </Link>
      </Box>
      <Box sx={{ cursor: "pointer" }}>
        <Link href="#">
          <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
        </Link>
      </Box>
      <Box sx={{ cursor: "pointer" }}>
        <Link href="#">
          <Image src="/youtube.svg" alt="Youtube" width={24} height={24} />
        </Link>
      </Box>
    </Stack>
  )
}
