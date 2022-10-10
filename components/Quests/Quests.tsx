import { QuestHits } from "./QuestHits"
import Link from "next/link"
import { useFirestore } from "reactfire"
import { populateQuests, populateBids } from "storage/quest"
import { searchClient } from "typesense/insantsearch"
import { InstantSearch } from "react-instantsearch-dom"
import { QuestSearchBox } from "./QuestSearchBox"
import { QuestRefinementList } from "./QuestRefinementList"
import { QuestPagination } from "./QuestPagination"
import { Button, Stack } from "@mui/material"

export function Quests(): JSX.Element {
  const firestore = useFirestore()

  return (
    <InstantSearch searchClient={searchClient} indexName="quests">
      <Stack direction="row" spacing={2} sx={{ mt: "1rem", mb: "1rem" }}>
        <Stack spacing={2}>
          <QuestSearchBox />
          <QuestRefinementList attribute="tags" />
          <Button variant="contained" onClick={() => populateQuests(firestore)}>
            populate quests
          </Button>
          <Button variant="contained" onClick={() => populateBids(firestore)}>
            populate bids
          </Button>
          <Link href="/add-quest">
            <Button variant="contained">Add Quest</Button>
          </Link>
        </Stack>
        <Stack spacing={6}>
          <QuestHits />
          <QuestPagination />
        </Stack>
      </Stack>
    </InstantSearch>
  )
}
