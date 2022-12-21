import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Container, Box } from "@mui/material"
import { FAQs } from "components/FAQs"
import { GetItDone } from "components/GetItDone"
import { MonthTopUsers } from "components/MonthTopUsers"
import { BusinessHeroes } from "components/BusinessHeroes"
import FeaturedCompanies from "components/FeaturedCompanies"
import { HirerHeading } from "components/HirerHeading"

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Container>
        <Box pt="5rem" pb="7rem">
          <HirerHeading />
        </Box>
        <FeaturedCompanies />
        <Box pt="8rem" pb="4rem">
          <BusinessHeroes />
        </Box>
        <Box py="4rem">
          <MonthTopUsers
            xpGained={4892}
            info={"1,992 active questers"}
            header={"This month's top questers"}
            subheader={"The current heroes that are bidding on this quest."}
            greenButton={"Create a quest"}
            greenButtonLink={""}
            whiteButtonLink={"quests"}
          />
        </Box>
      </Container>
      <GetItDone />
      <Container>
        <FAQs />
      </Container>
      <Footer />
    </Box>
  )
}