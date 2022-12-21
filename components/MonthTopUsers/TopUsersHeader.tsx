import Link from "next/link"
import { Stack, Typography } from "@mui/material"
import { WhiteButton } from "components/WhiteButton"
import { GreenButton } from "components/GreenButton"

export interface TopUsersHeaderProps {
  info: string
  header: string
  subheader: string
  button: string
  link: string
  seeAll: string
}

export function TopUsersHeader({
  info,
  header,
  subheader,
  button,
  link,
  seeAll,
}: TopUsersHeaderProps) {
  return (
    <Stack spacing={2} maxWidth="17rem">
      <Typography variant="body1" fontWeight={500} color="primary.main">
        {info}
      </Typography>
      <Typography variant="h4" fontWeight={500}>
        {header}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {subheader}
      </Typography>
      <Stack direction="row" spacing={2} pt="1rem">
        <Link
          href={seeAll}
          style={{
            textDecoration: "none",
          }}
        >
          <WhiteButton>See all</WhiteButton>
        </Link>
        <Link
          href={link}
          style={{
            textDecoration: "none",
          }}
        >
          <GreenButton>{button}</GreenButton>
        </Link>
      </Stack>
    </Stack>
  )
}
