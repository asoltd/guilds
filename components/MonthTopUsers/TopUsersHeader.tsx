import { Button, Stack, Typography } from "@mui/material"
import Link from "next/link"

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
        <Link href={seeAll}>
          <Button
            variant="outlined"
            sx={{
              whiteSpace: "nowrap",
              textTransform: "none",
              color: "text.primary",
              borderColor: (theme) => theme.palette.grey[300],
              borderRadius: "0.5rem",
              px: "1rem",
            }}
          >
            See all
          </Button>
        </Link>
        <Link href={link}>
          <Button
            variant="contained"
            sx={{
              whiteSpace: "nowrap",
              textTransform: "none",
              color: "white",
              borderColor: (theme) => theme.palette.grey[300],
              borderRadius: "0.5rem",
              px: "1rem",
            }}
          >
            {button}
          </Button>
        </Link>
      </Stack>
    </Stack>
  )
}
