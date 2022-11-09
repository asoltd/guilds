import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, limit, query } from "firebase/firestore"
import { Stack } from "@mui/material"
import { ReusableSlider } from "components/ReusableComponents/ReusableSlider/ReusableSlider"
import { Hero } from "storage/hero"

export function FeaturedHeroesSlider() {
  const firestore = useFirestore()
  const heroesRef = collection(firestore, "heroes")
  const heroesQuery = query(heroesRef, limit(20))
  const { status: status, data: heroes } =
    useFirestoreCollectionData(heroesQuery)

  const exampleHeroes = heroes as Hero[]
  return (
    <Stack>
      <ReusableSlider variant="hero" status={status} items={exampleHeroes} />
    </Stack>
  )
}
