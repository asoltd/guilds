import { connectHits } from "react-instantsearch-dom"
import { Quest } from "types/quest"
import { QuestHit } from "./QuestHit"
import { Grid, Box } from "@mui/material"

interface HitsProps {
  hits: Quest[]
}

function Hits({ hits }: HitsProps) {
  return (
    <Box>
      <Grid container columnSpacing={4} rowSpacing={4}>
        <>
          {hits.map((hit: Quest, idx) => (
            <QuestHit hit={hit} key={idx} />
          ))}
        </>
      </Grid>
    </Box>
  )
}

export const QuestHits = connectHits(Hits)
