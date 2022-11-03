import { connectHits } from "react-instantsearch-dom"
import { Team } from "storage/team"
import { TeamHit } from "./TeamHit"
import { Grid, Box } from "@mui/material"

interface HitsProps {
  hits: Team[]
}

function Hits({ hits }: HitsProps) {
  return (
    <Box>
      <Grid container columnSpacing={4} rowSpacing={4}>
        <>
          {hits.map((hit: Team, idx) => (
            <TeamHit hit={hit} key={idx} />
          ))}
        </>
      </Grid>
    </Box>
  )
}

export const TeamHits = connectHits(Hits)
