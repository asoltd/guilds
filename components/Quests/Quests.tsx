import styled from "styled-components"
import { QuestHits } from "./QuestHits"
import Link from "next/link"
import { Grid } from "styled-css-grid"
import { useFirestore } from "reactfire"
import { populateQuests, populateBids } from "storage/quest"
import { searchClient } from "typesense/insantsearch"
import { Box, Button } from "@mui/material"
import { InstantSearch, RefinementList } from "react-instantsearch-dom"
import { QuestSearchBox } from "./SearchBox"

export function Quests(): JSX.Element {
  const firestore = useFirestore()

  return (
    <Box sx={{ display: "flex", flexDirection: "row", marginTop: "1rem" }}>
      <InstantSearch searchClient={searchClient} indexName="quests">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "20%",
            height: "20rem",
          }}
        >
          <RefinementList attribute="tags" />
          <Button variant="contained" onClick={() => populateQuests(firestore)}>
            populate quests if not populated
          </Button>
          <Button variant="contained" onClick={() => populateBids(firestore)}>
            populate bids if not populated
          </Button>
          <Link href="/add-quest">
            <Button variant="contained">Add Quest</Button>
          </Link>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", width: "80%" }}>
          <QuestSearchBox />
          <Box sx={{ marginTop: "1rem" }}>
            <Grid columns={"40% 40%"} justifyContent="space-around">
              <QuestHits />
            </Grid>
          </Box>
        </Box>
      </InstantSearch>
    </Box>
  )
}
