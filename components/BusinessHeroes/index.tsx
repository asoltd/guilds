import { BusinessHeroesSteps } from "./BusinessHeroesSteps"
import { BusinessHeroesHeader } from "./BusinessHeroesHeader"
import { BusinessHeroesSlides } from "./BusinessHeroesSlides"
import { Stack } from "@mui/material"

export function BusinessHeroes() {
  return (
    <Stack spacing={6} p="1rem">
      <BusinessHeroesHeader />
      <Stack
        spacing={{ xs: 4, sm: 4, md: 4 }}
        direction={{ lg: "row", xl: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "center", sm: "center", md: "center" }}
      >
        <BusinessHeroesSteps />
        <BusinessHeroesSlides />
      </Stack>
    </Stack>
  )
}
