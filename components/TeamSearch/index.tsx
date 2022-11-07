import { TeamHits } from "./TeamHits"
import { useFirestore } from "reactfire"
import { teamsSearchClient } from "typesense/insantsearch"
import { InstantSearch } from "react-instantsearch-dom"
import { RefinementList, Pagination, SearchBox } from "../SearchComponents"
import { Button, Stack, Divider, Container } from "@mui/material"
import { populate } from "storage/team/populate"
import { FindTeamBanner } from "./FindTeamBanner"

export function Teams(): JSX.Element {
  const firestore = useFirestore()

  return (
    <Stack>
      <FindTeamBanner />
      <Container>
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
                <RefinementList attribute="roles" label="Role categories" />
                <RefinementList attribute="industry" label="Industry" />
                <Button variant="outlined" onClick={() => populate(firestore)}>
                  populate teams
                </Button>
              </Stack>
              <TeamHits />
            </Stack>
            <Divider />
            <Pagination />
          </Stack>
        </InstantSearch>
      </Container>
    </Stack>
  )
}
