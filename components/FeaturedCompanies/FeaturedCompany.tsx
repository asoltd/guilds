import { Box, Stack, Typography } from "@mui/material"
import Image from "next/image"

interface FeaturedCompanyProps {
  image: string
}

export default function FeaturedCompany({ image }: FeaturedCompanyProps) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Box width={40} height={40}>
        <Image src={image} width={40} height={40} alt="Featured Company" />
      </Box>
      <Typography variant="h5">Guilds</Typography>
    </Stack>
  )
}
