import { Stack, Typography } from "@mui/material"
import { GreenButton } from "components/GreenButton"
import { WhiteButton } from "components/WhiteButton"
import Link from "next/link"

export default function BackToSearch() {
  return (
    <Stack
      height="12rem"
      bgcolor="primary.main"
      borderRadius="1.5rem"
      justifyContent="center"
      px="5rem"
      spacing={1}
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" color="background.default" fontWeight={500}>
          Go back to search
        </Typography>
        <Stack direction="row" spacing={1.5}>
          <Link href="quests" style={{ textDecoration: "none" }}>
            <WhiteButton>View all quests</WhiteButton>
          </Link>
          <Link href="search-quest" style={{ textDecoration: "none" }}>
            <GreenButton>Go back to search results</GreenButton>
          </Link>
        </Stack>
      </Stack>
      <Typography variant="body1" color="primary.light">
        Not quite your thing? Go back to your search results
      </Typography>
    </Stack>
  )
}
