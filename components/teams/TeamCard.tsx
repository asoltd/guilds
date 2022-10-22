import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Typography,
} from "@mui/material"
import { red } from "@mui/material/colors"
import Image from "next/image"
import Link from "next/link"
import { Team } from "storage/team"

type CardProps = {
  team: Team
}
const TeamCard = ({ team }: CardProps): JSX.Element => {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#101828" }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            <Image
              src={`${team?.image}`}
              alt={team.name.first}
              width={640}
              height={680}
            />
          </Avatar>
        }
        title={
          <Link
            href={{
              pathname: "/team",
              query: { teamId: team.id },
            }}
          >
            <Typography color={`#41764A`} sx={{ cursor: "pointer" }}>
              {team.name.first} {team.name.second} {team.name.last}
            </Typography>
          </Link>
        }
        subheader={
          <Link href="/">
            <Typography color={`#667085`}>{team?.title}</Typography>
          </Link>
        }
      />
      <CardContent sx={{ hyphens: "auto" }}>
        <Typography variant="body2" color="text.secondary" align="justify">
          {team?.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default TeamCard
