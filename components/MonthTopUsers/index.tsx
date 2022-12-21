import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, limit, query } from "firebase/firestore"
import { Grid, Stack } from "@mui/material"
import { TopUsersHeader, TopUsersHeaderProps } from "./TopUsersHeader"
import { User } from "./User"
import { Hero } from "types/hero"

interface TopMonthUserProps extends TopUsersHeaderProps {
  xpGained: number
}

export function MonthTopUsers({
  info,
  header,
  subheader,
  button,
  link,
  seeAll,
  xpGained,
}: TopMonthUserProps) {
  const firestore = useFirestore()
  const heroesRef = collection(firestore, "heroes")
  const heroesQuery = query(heroesRef, limit(6))
  const { data } = useFirestoreCollectionData(heroesQuery)
  const heroes = data as Hero[]

  return (
    <Stack direction="row" spacing={10}>
      <TopUsersHeader
        info={info}
        header={header}
        subheader={subheader}
        button={button}
        link={link}
        seeAll={seeAll}
      />
      <Grid container>
        {heroes?.map((hero, key) => (
          <Grid item xs={8} sm={8} md={6} lg={4} xl={4} key={key}>
            <User hero={hero} xpGained={xpGained} key={key} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}
