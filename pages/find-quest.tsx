import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { QuestHits } from "../components/QuestHits"
import { questsSearchClient } from "typesense/instantsearch"
import { InstantSearch } from "react-instantsearch-dom"
import {
  RefinementList,
  Pagination,
  SearchBox,
} from "../components/SearchComponents"
import { Stack, Divider, Container, Box } from "@mui/material"
import { PageHeader } from "../components/ReusableComponents/PageHeader"

export default function FindQuest() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <PageHeader
        greenSubtitle="Your journey awaits you"
        header="Find a new quest"
        greySubtitle="All of the quests currently available for completion in Guilds"
      />
      <Container>
        <Stack>
          <InstantSearch searchClient={questsSearchClient} indexName="quests">
            <Stack
              direction="column"
              justifyContent="space-around"
              spacing={4}
              mb="4rem"
            >
              <Stack direction="row" spacing={6} justifyContent="space-between">
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
        </Stack>
      </Container>
      <Footer />
    </Box>
  )
}
