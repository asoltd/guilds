import { Stack, Typography } from "@mui/material"

interface BountiesBalanceCardProps {
  title: string
  balance: string
}

export function BountiesBalanceCard({
  title,
  balance,
}: BountiesBalanceCardProps) {
  return (
    <Stack
      sx={{
        p: 2,
        border: "1px solid",
        borderColor: (theme) => theme.palette.grey[200],
        borderRadius: "0.5rem",
        flexGrow: 1,
        height: "10rem",
      }}
      justifyContent="space-around"
    >
      <Typography variant="body1" fontWeight={500}>
        {title}
      </Typography>
      <Stack spacing={0.5}>
        <Typography
          variant="caption"
          color={(theme) => theme.palette.grey[700]}
        >
          Current balance
        </Typography>
        <Typography variant="h4" fontWeight={600}>
          {balance}
        </Typography>
      </Stack>
    </Stack>
  )
}
