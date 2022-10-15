import { Box, Divider, Stack } from "@mui/material"
import { Bid as BidType } from "storage/quest"

interface AcceptedBidProps {
  path: string
  title: string
  bid: BidType
}

export function AcceptedBid({ title, bid }: AcceptedBidProps): JSX.Element {
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
          <Box>@{bid?.bidderId}</Box>
        </Box>
        <Box>
          <Box>Estimated completion: {bid?.timeEstimate}</Box>
        </Box>
      </Stack>
      <Divider orientation="horizontal" flexItem />
    </Stack>
  )
}
