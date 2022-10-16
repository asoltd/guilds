import { connectHits } from "react-instantsearch-dom"
import { Quest } from "storage/quest"
import { QuestHit } from "./QuestHit"
import { Grid } from "@mui/material"

interface HitsProps {
  hits: Quest[]
}

function Hits({ hits }: HitsProps) {
  return (
    <Grid container spacing={2} mt={"1rem"}>
      <>
        {hits.map((hit: Quest, idx) => (
          <QuestHit hit={hit} key={idx} />
        ))}
      </>
    </Grid>
  )
}

export const QuestHits = connectHits(Hits)
