import Link from "next/link"
import styled from "styled-components"
import { Button, Divider, Stack, Typography } from "@mui/material"
import { Hero } from "storage/hero"

const TeamLeaderLink = styled(Link)`
  text-decoration: none;
`

interface TeamLeaderInfoProps {
  teamLeader: Hero
}

export function TeamLeaderInfo({ teamLeader }: TeamLeaderInfoProps) {
  return (
    <Stack width={576} spacing={5} mb={{ xs: "2rem", sm: "2rem", md: "2rem" }}>
      <Stack spacing={2} mb="2rem">
        <Typography variant="body1" fontWeight={600} color="primary.main">
          Case study
        </Typography>
        <Typography variant="h3">About the team leader</Typography>
      </Stack>
      <Divider />
      <Typography color="text.secondary">{teamLeader?.bio}</Typography>
      <Stack direction="row" spacing={2}>
        <TeamLeaderLink href="#">
          <Button
            variant="outlined"
            sx={{
              borderRadius: "0.5rem",
              height: "3rem",
              color: "text.primary",
              borderColor: (theme) => theme.palette.grey[300],
            }}
          >
            <Typography textTransform="none">View full profile</Typography>
          </Button>
        </TeamLeaderLink>
        <TeamLeaderLink href="#">
          <Button
            variant="contained"
            sx={{
              height: "3rem",
              borderRadius: "0.5rem",
            }}
          >
            <Typography textTransform="none">Message</Typography>
          </Button>
        </TeamLeaderLink>
      </Stack>
    </Stack>
  )
}
