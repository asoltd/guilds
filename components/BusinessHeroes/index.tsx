import { Box, Stack } from "@mui/material"
import { BusinessHeroesSteps } from "./BusinessHeroesSteps"
import { BusinessHeroesHeader } from "./BusinessHeroesHeader"

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
        <Box
          width="576px"
          height="560px"
          bgcolor={(theme) => theme.palette.grey[100]}
          borderRadius="1rem"
        />
      </Stack>
    </Stack>
  )
}
