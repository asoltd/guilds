import { Stack } from "@mui/system"
import { HeroAvatar } from "components/HeroAvatar"
import { TeamLeaderInfo } from "./TeamLeaderInfo"
import { Hero } from "types/hero"

interface AboutTheTeamLeaderProps {
  teamLeader: Hero
}

export function AboutTheTeamLeader({ teamLeader }: AboutTheTeamLeaderProps) {
  return (
    <Stack spacing={3} direction={{ lg: "row", xl: "row" }} alignItems="start">
      <TeamLeaderInfo teamLeader={teamLeader} />
      <HeroAvatar hero={teamLeader} size="medium" />
    </Stack>
  )
}
