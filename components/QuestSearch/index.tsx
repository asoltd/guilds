import { QuestHits } from "./QuestHits"
import { useFirestore } from "reactfire"
import { populateQuests, populateBids } from "storage/quest"
import { searchClient } from "typesense/insantsearch"
import { InstantSearch } from "react-instantsearch-dom"
import { RefinementList, Pagination, SearchBox } from "../SearchComponents"
import { Button, Stack, Divider } from "@mui/material"

export function Quests(): JSX.Element {
  const firestore = useFirestore()

  return (
    <InstantSearch searchClient={searchClient} indexName="quests">
      <Stack
        direction="column"
        justifyContent="space-around"
        spacing={4}
        mb="4rem"
      >
        <Stack direction="row" spacing={6}>
          <Stack direction="column" spacing={4}>
            <SearchBox />
            <RefinementList attribute="tags" />
            <Button
              variant="outlined"
              onClick={() => populateQuests(firestore)}
            >
              populate quests
            </Button>
            <Button variant="outlined" onClick={() => populateBids(firestore)}>
              populate bids
            </Button>
          </Stack>
          <QuestHits />
        </Stack>
        <Divider />
        <Pagination />
      </Stack>
    </InstantSearch>
  )
}
