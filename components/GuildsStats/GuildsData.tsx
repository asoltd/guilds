import { Stack, Typography } from "@mui/material"

interface GuildsDataProps {
  value: number | string
  caption: string
}

export function GuildsData({ value, caption }: GuildsDataProps) {
  return (
    <Stack spacing={1} alignItems="center" width="calc(100%/3)">
      <Typography fontWeight={600} variant="h3" sx={{ color: "primary.main" }}>
        {value}
      </Typography>
      <Typography textAlign="center" variant="body1">
        {caption}
      </Typography>
    </Stack>
  )
}
