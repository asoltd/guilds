import { connectHits } from "react-instantsearch-dom"
import { QuestHit } from "./QuestHit"
import { Grid } from "@mui/material"

function Hits({ hits }) {
  return (
    <>
      {hits.map((hit, idx) => (
        <Grid item xs={6} key={idx}>
          <QuestHit hit={hit} />
        </Grid>
      ))}
    </>
  )
}

export const QuestHits = connectHits(Hits)
