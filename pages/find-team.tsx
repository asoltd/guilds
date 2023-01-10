import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { TeamHits } from "../components/TeamHits"
import { teamsSearchClient } from "typesense/instantsearch"
import { InstantSearch } from "react-instantsearch-dom"
import {
  RefinementList,
  Pagination,
  SearchBox,
} from "../components/SearchComponents"
import { Stack, Divider, Container, Box } from "@mui/material"
import { PageHeader } from "components/PageHeader"

export default function FindTeam() {
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
        header="Find a new team"
        greySubtitle="All of the teams currently looking for team members"
      />
      <Container>
        <Stack>
          <InstantSearch searchClient={teamsSearchClient} indexName="teams">
            <Stack
              direction="column"
              justifyContent="space-around"
              spacing={4}
              mb="4rem"
            >
              <Stack direction="row" spacing={6}>
                <Stack direction="column" spacing={4}>
                  <SearchBox />
                  <RefinementList
                    attribute="roleCategories"
                    label="Role categories"
                  />
                  <RefinementList attribute="industry" label="Industry" />
                </Stack>
                <TeamHits />
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
