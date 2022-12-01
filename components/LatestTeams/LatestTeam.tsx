import Link from "next/link"
import styled from "@emotion/styled"
import Image from "next/image"
import LinesElipsis from "react-lines-ellipsis"
import { Grid, Chip, Stack, Typography } from "@mui/material"
import { Team } from "types/team"
import { StorageImage } from "reactfire"
import { TeamMembers } from "./TeamMembers"

const TeamThumbnail = styled(StorageImage)({
  objectFit: "cover",
  height: 240,
  width: 420,
})

interface LatestTeamProps {
  team: Team
}

export function LatestTeam({ team }: LatestTeamProps) {
  return (
    <Grid item xs={6} width={420}>
      <Stack spacing={3}>
        <TeamThumbnail storagePath={`teams/${team.image}`} />
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h6">{team?.title}</Typography>
          <Link
            href={{
              pathname: "/team",
              query: { teamId: team.id },
            }}
          >
            <Image
              src="/arrow-right-up.svg"
              alt="arrow-right-up"
              width={15}
              height={15}
            />
          </Link>
        </Stack>
        <Typography variant="body1">
          <LinesElipsis
            text={team.description}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="words"
          />
        </Typography>
        <Stack direction="row" spacing={1}>
          <TeamMembers team={team} />
        </Stack>
        <Chip
          label={team.highlight}
          sx={{
            width: "fit-content",
            backgroundColor: "primary.light",
            color: "primary.main",
          }}
        />
      </Stack>
    </Grid>
  )
}
