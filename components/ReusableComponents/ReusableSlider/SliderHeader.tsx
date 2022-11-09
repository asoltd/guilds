import { Stack, Typography } from "@mui/material"

interface Variant {
  variant: "hero" | "quest" | "team"
}

function HeroesSliderHeader() {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack spacing={2}>
        <Typography variant="h4" fontWeight={600}>
          Don't just take our word for it
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Hear from some of our amazing customers who are getting the job done
          faster.
        </Typography>
      </Stack>
    </Stack>
  )
}

function QuestsSliderHeader() {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack spacing={2}>
        <Typography variant="h4" fontWeight={600}>
          Latest quests
        </Typography>
        <Typography variant="body1" color="text.secondary">
          The latest quests that have been posted to Guilds
        </Typography>
      </Stack>
    </Stack>
  )
}

function TeamsSliderHeader() {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack spacing={2}>
        <Typography variant="h4" fontWeight={600}>
          Featured teams
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Teams that have recently joined the Guilds community
        </Typography>
      </Stack>
    </Stack>
  )
}

export function SliderHeader({ variant }: Variant) {
  const renderHeader = () => {
    switch (variant) {
      case "hero":
        return <HeroesSliderHeader />
      case "quest":
        return <QuestsSliderHeader />
      case "team":
        return <TeamsSliderHeader />
    }
  }
  return renderHeader()
}
