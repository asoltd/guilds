import { connectHits } from "react-instantsearch-dom"
import { QuestHit } from "./QuestHit"

function Hits({ hits }) {
  return (
    <>
      {hits.map((hit) => (
        <QuestHit hit={hit} />
      ))}
    </>
  )
}

export const QuestHits = connectHits(Hits)
