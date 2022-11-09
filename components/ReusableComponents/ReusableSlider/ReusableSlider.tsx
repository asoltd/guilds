import { Box, Container, Stack, Typography, useMediaQuery } from "@mui/material"
import { ScrollLeft, ScrollRight } from "components/ScrollButtons"
import { useRef, useState } from "react"
import { Hero } from "storage/hero"
import { Team } from "storage/team"
import { Quest } from "storage/quest"
import { LatestTeam } from "components/LatestTeamsSlider/LatestTeam"
import { HeroAvatar } from "components/HeroAvatar"
import { LatestQuest } from "components/LatestQuestsSlider/LatestQuest"
import { SliderButtons } from "components/ReusableComponents/ReusableSlider/SliderButtons"
import { SliderHeader } from "./SliderHeader"
import { Role } from "components/RolesAvailableSlider/Role"
import { Role as RoleType } from "storage/team"

interface Item extends Hero, Team, Quest, RoleType {}

interface ReusableSliderProps {
  variant: "hero" | "team" | "quest" | "role"
  status: "loading" | "success" | "error"
  items: Hero[] | Team[] | Quest[] | RoleType[]
}

export function ReusableSlider({
  items,
  status,
  variant,
}: ReusableSliderProps) {
  const [scrolledCard, setScrolledCard] = useState(0)
  const [mouseScrollDisabled, setMouseScrollDisabled] = useState(false)
  const featuredCardsRefs = useRef([])
  const featuredCardsContainerRef = useRef()
  const isMobile = useMediaQuery("(max-width: 600px)")

  const renderItem = (item: Item) => {
    switch (variant) {
      case "hero":
        return <HeroAvatar hero={item} size="small" />
      case "team":
        return <LatestTeam team={item} />
      case "quest":
        return <LatestQuest quest={item} />
      case "role":
        return <Role role={item} teamId={""} />
    }
  }

  return (
    <Stack spacing={4} alignItems="center" sx={{ overflow: "clip" }}>
      <Container>
        <Stack spacing={6}>
          <Stack spacing={6}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <SliderHeader variant={variant} />
              {!isMobile && <SliderButtons variant={variant} />}
            </Stack>
            <Stack direction="row">
              <Stack
                direction="row"
                spacing={3}
                ref={featuredCardsContainerRef}
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
                {status === "success" ? (
                  items?.map((item: Item, idx) => (
                    <Box
                      key={idx}
                      ref={(ref) => {
                        featuredCardsRefs.current[idx] = ref
                      }}
                    >
                      {renderItem(item)}
                    </Box>
                  ))
                ) : (
                  <Typography>Loading...</Typography>
                )}
              </Stack>
            </Stack>
            <Stack direction="row" spacing={3}>
              <ScrollLeft
                scrolledValue={scrolledCard}
                setScrolledValue={setScrolledCard}
                refs={featuredCardsRefs}
                containerRef={featuredCardsContainerRef}
              />
              <ScrollRight
                scrolledValue={scrolledCard}
                setScrolledValue={setScrolledCard}
                refs={featuredCardsRefs}
                containerRef={featuredCardsContainerRef}
              />
            </Stack>
            {isMobile && <SliderButtons variant={variant} />}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}
