import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Container, Box } from "@mui/material"
import { FAQs } from "components/FAQs"
import { GetItDone } from "components/GetItDone"
import { MonthTopUsers } from "components/MonthTopUsers"

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
        <MonthTopUsers
          xpGained={1992}
          info={"1,992 active questers"}
          header={"This month’s top questers"}
          subheader={"The current heroes that are bidding on this quest."}
          button={"Create a quest"}
          link={""}
          seeAll={"See all"}
        />
      </Container>
      <GetItDone />
      <Container>
        <FAQs />
      </Container>
      <Footer />
    </Box>
  )
}
