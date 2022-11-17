import styled from "styled-components"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, limit, query } from "firebase/firestore"
import { Box, Stack, Typography } from "@mui/material"
import { HeroAvatar } from "../HeroAvatar"
import { useRef, useState } from "react"
import { ScrollLeft, ScrollRight } from "components/ScrollButtons"
import { Container } from "@mui/system"
import { Hero } from "storage/hero"
import { FeaturedHeroesButtons } from "./FeaturedHeroesButtons"

export function FeaturedHeroesSlider() {
  const [scrolledHero, setScrolledHero] = useState(0)
  const [mouseScrollDisabled, setMouseScrollDisabled] = useState(false)
  const firestore = useFirestore()
  const heroesRef = collection(firestore, "heroes")
  const heroesQuery = query(heroesRef, limit(20))
  const { status: heroesStatus, data: heroes } =
    useFirestoreCollectionData(heroesQuery)

  const featuredHeroesRefs = useRef([])
  const featuredHeroesContainerRef = useRef()

  const isMobile = useMediaQuery("(max-width: 600px)")

  return (
    <Stack spacing={4} alignItems="center" sx={{ overflow: "clip" }}>
      <Container>
        <Stack spacing={6}>
          <Stack direction="row" justifyContent="space-between">
            <Stack spacing={2}>
              <Typography variant="h4" fontWeight={600}>
                Don't just take our word for it
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Hear from some of our amazing customers who are getting the job
                done faster.
              </Typography>
            </Stack>
            {!isMobile && <FeaturedHeroesButtons />}
          </Stack>
          <Stack spacing={6}>
            <Stack direction="row">
              <Stack
                direction="row"
                spacing={3}
                ref={featuredHeroesContainerRef}
                sx={{
                  scrollBehavior: "smooth",
                  overflow: mouseScrollDisabled ? "hidden" : "scroll",
                  pr: "100vw",
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
                onMouseEnter={() => setMouseScrollDisabled(true)}
                onMouseLeave={() => setMouseScrollDisabled(false)}
              >
                {heroesStatus === "success" ? (
                  heroes?.map((hero: Hero, idx) => (
                    <Box
                      key={idx}
                      ref={(ref) => {
                        featuredHeroesRefs.current[idx] = ref
                      }}
                    >
                      <HeroAvatar hero={hero} size="small" />
                    </Box>
                  ))
                ) : (
                  <Typography>Loading...</Typography>
                )}
              </Stack>
            </Stack>
            <Stack direction="row" spacing={3}>
              <ScrollLeft
                scrolledValue={scrolledHero}
                setScrolledValue={setScrolledHero}
                refs={featuredHeroesRefs}
                containerRef={featuredHeroesContainerRef}
              />
              <ScrollRight
                scrolledValue={scrolledHero}
                setScrolledValue={setScrolledHero}
                refs={featuredHeroesRefs}
                containerRef={featuredHeroesContainerRef}
              />
            </Stack>
            {isMobile && <FeaturedHeroesButtons />}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}
