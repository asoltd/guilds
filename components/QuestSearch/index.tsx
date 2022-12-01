import { QuestHits } from "./QuestHits"
import { questsSearchClient } from "typesense/insantsearch"
import { InstantSearch } from "react-instantsearch-dom"
import { RefinementList, Pagination, SearchBox } from "../SearchComponents"
import { Stack, Divider, Container } from "@mui/material"
import { PageHeader } from "../ReusableComponents/PageHeader"

export function Quests(): JSX.Element {
  return (
    <Stack>
      <PageHeader
        greenSubtitle="Your journey awaits you"
        header="Find a new quest"
        greySubtitle="All of the quests currently available for completion in Guilds"
      />
      <Container>
        <InstantSearch searchClient={questsSearchClient} indexName="quests">
          <Stack
            direction="column"
            justifyContent="space-around"
            spacing={4}
            mb="4rem"
          >
            <Stack direction="row" spacing={6}>
              <Stack direction="column" spacing={4}>
                <SearchBox />
                <RefinementList attribute="tags" label="Quest categories" />
              </Stack>
              <QuestHits />
            </Stack>
            <Divider />
            <Pagination />
          </Stack>
        </InstantSearch>
      </Container>
    </Stack>
  )
}
