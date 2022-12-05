import { Stack, Typography } from "@mui/material"
import { Variant } from "components/Slider"

interface HeaderProps {
  title: string
  subtitle: string
}

enum SliderVariant {
  Hero = "hero",
  Team = "team",
  Quest = "quest",
  Role = "role",
}

const title = {
  hero: "Don't just take our word for it",
  quest: "Latest quests",
  team: "Featured teams",
  role: "Roles available",
}
const subtitle = {
  hero: "Hear from some of our amazing customers who are getting the job done faster.",
  quest: "The latest quests that have been posted to Guilds",
  team: "Teams that have recently joined the Guilds community",
  role: "Current roles available within this team.",
}

function ReusableSliderHeader({ title, subtitle }: HeaderProps) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack spacing={2}>
        <Typography variant="h4" fontWeight={600}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {subtitle}
        </Typography>
      </Stack>
    </Stack>
  )
}

export function SliderHeader({ variant }: Variant) {
  switch (variant) {
    case SliderVariant.Hero:
      return (
        <ReusableSliderHeader title={title.hero} subtitle={subtitle.hero} />
      )
    case SliderVariant.Quest:
      return (
        <ReusableSliderHeader title={title.quest} subtitle={subtitle.quest} />
      )
    case SliderVariant.Team:
      return (
        <ReusableSliderHeader title={title.team} subtitle={subtitle.team} />
      )
    case SliderVariant.Role:
      return (
        <ReusableSliderHeader title={title.role} subtitle={subtitle.role} />
      )
  }
}
