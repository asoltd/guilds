import { BusinessHeroesSteps } from "./BusinessHeroesSteps"
import { BusinessHeroesHeader } from "./BusinessHeroesHeader"
import { BuisnessHeroesSlides } from "./BuisnessHeroesSlides"
import { Stack } from "@mui/material"

export function BusinessHeroes() {
  return (
    <Stack spacing={6}>
      <BusinessHeroesHeader />
      <Stack
        spacing={{ xs: 4, sm: 4, md: 4 }}
        direction={{ lg: "row", xl: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "center", sm: "center", md: "center" }}
      >
        <BusinessHeroesSteps />
        <BuisnessHeroesSlides />
      </Stack>
    </Stack>
  )
}
