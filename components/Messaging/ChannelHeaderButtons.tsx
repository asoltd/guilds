import { Box, Button, Stack, Typography } from "@mui/material"
import Link from "next/link"

interface ChannelHeaderButtonProps {
  href: string
  label: string
}

function ChannelHeaderButton({ href, label }: ChannelHeaderButtonProps) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Button
        variant="outlined"
        sx={{
          color: (theme) => theme.palette.grey[700],
          borderColor: (theme) => theme.palette.grey[300],
          borderRadius: "0.5rem",
          textTransform: "none",
          height: "2.7rem",
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          {label}
        </Typography>
      </Button>
    </Link>
  )
}

export function ChannelHeaderButtons({ variant }) {
  return (
    <Box>
      {variant == "freelancer" ? (
        <ChannelHeaderButton label="Hire a mentor" href="" />
      ) : (
        <Stack direction="row" spacing={2}>
          <ChannelHeaderButton label="Hire a freelancer" href="" />
          <ChannelHeaderButton label="View proposal" href="" />
        </Stack>
      )}
    </Box>
  )
}
