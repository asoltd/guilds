import Link from "next/link"
import { Stack, Typography } from "@mui/material"
import { WhiteButton } from "components/WhiteButton"
import { GreenButton } from "components/GreenButton"

export interface TopUsersHeaderProps {
  info: string
  header: string
  subheader: string
  greenButton: string
  whiteButtonLink: string
  greenButtonLink: string
}

export function TopUsersHeader({
  info,
  header,
  subheader,
  greenButton,
  whiteButtonLink,
  greenButtonLink,
}: TopUsersHeaderProps) {
  return (
    <Stack spacing={2}>
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
          href={whiteButtonLink}
          style={{
            textDecoration: "none",
          }}
        >
          <WhiteButton>See all</WhiteButton>
        </Link>
        <Link
          href={greenButtonLink}
          style={{
            textDecoration: "none",
          }}
        >
          <GreenButton>{greenButton}</GreenButton>
        </Link>
      </Stack>
    </Stack>
  )
}
