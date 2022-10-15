import { Box, Divider, Stack } from "@mui/material"
import { Bid as BidType } from "storage/quest"

interface PendingBidProps {
  path: string
  title: string
  bid: BidType
}

export function PendingBid({ title, bid }: PendingBidProps): JSX.Element {
  return (
    <Stack>
      <Stack
        py={1}
        px={2}
        alignItems="center"
        justifyContent="space-between"
        direction="row"
      >
        <Box>
          <Box>{title}</Box>
          <Box>@{bid?.userId}</Box>
        </Box>
        <Box>
          <Box>Estimated completion: {bid?.timeEstimate}</Box>
        </Box>
      </Stack>
      <Divider orientation="horizontal" flexItem />
    </Stack>
  )
}
