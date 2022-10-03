import Image from "next/image"
import Link from "next/link"
import { Team } from "storage/team"

type CardProps = {
  team: Team
}
const TeamCard = ({ team }: CardProps) => {
  return (
    <div>
      <div>
        <Image
          src={`${team?.image}`}
          alt={team.name.first}
          width={500}
          height={400}
        />
      </div>
      <div>
        <b> Name: </b>
        {team.name.first} {team.name.second} {team.name.last}
      </div>
      <div>
        <b>Title: </b>
        {team?.title}
      </div>
      <div>
        <b>Description:</b> {team?.description}
      </div>
      <div>
        <b>Tags:</b> {team?.tags}
      </div>
      <Link
        href={{
          pathname: "/team",
          query: { teamId: team.id },
        }}
      >
        <button>view {team.name.first}</button>
      </Link>
    </div>
  )
}

export default TeamCard
