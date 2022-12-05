import {
  StorageImage,
  useFirestore,
  useFirestoreCollectionData,
} from "reactfire"
import { collection, limit, query } from "firebase/firestore"
import { Hero } from "types/hero"
import { Stack } from "@mui/material"
import { useEffect, useRef, useState } from "react"

const delay = 5000

export function BuisnessHeroesSlides() {
  const firestore = useFirestore()
  const questRef = collection(firestore, "heroes")
  const heroesQuery = query(questRef, limit(20))
  const { data: heroes } = useFirestoreCollectionData(heroesQuery)

  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === heroes.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    )

    return () => {
      resetTimeout()
    }
  }, [index])

  return (
    <Stack borderRadius="1rem" direction="row" overflow="clip" maxWidth="576px">
      {heroes?.map((hero: Hero, idx) => (
        <StorageImage
          key={idx}
          storagePath={`general/${heroes[idx].profilePicture}`}
          width="576px"
          height="560px"
          style={{
            objectFit: "cover",
            transform: `translate3d(${-index * 576}px, 0, 0)`,
            transition: "ease(0.455, 0.03, 0.515, 0.955) 750ms",
          }}
        />
      ))}
    </Stack>
  )
}
