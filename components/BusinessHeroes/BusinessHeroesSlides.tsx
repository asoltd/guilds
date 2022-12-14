import {
  StorageImage,
  useFirestore,
  useFirestoreCollectionData,
} from "reactfire"
import { collection, query } from "firebase/firestore"
import { Hero } from "types/hero"
import { Stack } from "@mui/material"
import { useEffect, useRef, useState } from "react"

const delay = 5000

export function BusinessHeroesSlides() {
  const firestore = useFirestore()
  const heroesRef = collection(firestore, "heroes")
  const heroesQuery = query(heroesRef)
  const { data } = useFirestoreCollectionData(heroesQuery)
  const heroes = data as Hero[]

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
      () => setIndex((prevIndex) => (prevIndex === 6 - 1 ? 0 : prevIndex + 1)),
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
          alt="hero image"
          storagePath={`general/${heroes[idx].profilePicture}`}
          width="576px"
          height="560px"
          style={{
            objectFit: "cover",
            transform: `translate3d(${-index * 576}px, 0, 0)`,
            transition: "ease 0.5s",
          }}
        />
      ))}
    </Stack>
  )
}
