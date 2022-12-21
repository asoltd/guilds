import Link from "next/link"
import styled from "@emotion/styled"
import Image from "next/image"
import LinesElipsis from "react-lines-ellipsis"
import { Grid, Chip, Stack, Typography } from "@mui/material"
import { Team } from "types/team"
import { StorageImage } from "reactfire"
import { TeamMembers } from "../LatestTeamsSlider/TeamMembers"

const TeamThumbnail = styled(StorageImage)({
  objectFit: "cover",
  height: 240,
})

interface LatestTeamProps {
  hit: Team
}

export function TeamHit({ hit }: LatestTeamProps) {
  return (
    <Grid item xs={12}>
      <Stack spacing={3}>
        <TeamThumbnail storagePath={`teams/${hit.image}`} />
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h6">{hit?.title}</Typography>
          <Link
            href={{
              pathname: "/team",
              query: { teamId: hit.id },
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
            text={hit.description}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="words"
          />
        </Typography>
        <Stack direction="row" spacing={1}>
          <TeamMembers team={hit} />
        </Stack>
        <Chip
          label={hit.highlight}
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
