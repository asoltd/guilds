import styled from "styled-components"
import { QuestHits } from "./QuestHits"
import Link from "next/link"
import { useFirestore } from "reactfire"
import { populateQuests, populateBids } from "storage/quest"
import { searchClient } from "typesense/insantsearch"
import { Box, Button, Stack, Grid } from "@mui/material"
import { InstantSearch } from "react-instantsearch-dom"
import { QuestSearchBox } from "./QuestSearchBox"
import { QuestRefinementList } from "./QuestRefinementList"

export function Quests(): JSX.Element {
  const firestore = useFirestore()

  return (
    <InstantSearch searchClient={searchClient} indexName="quests">
      <Stack direction="row" spacing={2} sx={{ marginTop: "1rem" }}>
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
        <Stack spacing={2}>
          <Box sx={{ marginTop: "1rem" }}>
            <Grid container spacing={2}>
              <QuestHits />
            </Grid>
          </Box>
        </Stack>
      </Stack>
    </InstantSearch>
  )
}
