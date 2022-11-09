import Link from "next/link"
import { Button, Stack, Typography } from "@mui/material"

interface Variant {
  variant: "hero" | "quest" | "team"
}

function HeroesSliderButtons() {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ "& > *": { width: "100%" } }}
      justifyContent={{ xs: "space-between" }}
    >
      <Link href="/heroes" style={{ textDecoration: "none" }}>
        <Button
          variant="outlined"
          sx={{
            height: "3rem",
            borderRadius: "0.5rem",
            borderColor: (theme) => theme.palette.grey[300],
            width: "100%",
          }}
        >
          <Typography
            variant="body1"
            textTransform="none"
            px="0.6rem"
            fontWeight={500}
            color={(theme) => theme.palette.grey[700]}
          >
            Our customers
          </Typography>
        </Button>
      </Link>
      <Link href="/signup" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          sx={{
            height: "3rem",
            borderRadius: "0.5rem",
            width: "100%",
          }}
        >
          <Typography
            variant="body1"
            textTransform="none"
            px="0.6rem"
            fontWeight={500}
          >
            Create account
          </Typography>
        </Button>
      </Link>
    </Stack>
  )
}

function QuestsSliderButtons() {
  return (
    <Stack sx={{ "& > *": { width: "100%" } }}>
      <Link href="/signup" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          sx={{
            height: "3rem",
            borderRadius: "0.5rem",
            width: "100%",
          }}
        >
          <Typography
            variant="body1"
            textTransform="none"
            px="0.6rem"
            fontWeight={500}
          >
            View all quests
          </Typography>
        </Button>
      </Link>
    </Stack>
  )
}

function TeamsSliderButtons() {
  return (
    <Stack sx={{ "& > *": { width: "100%" } }}>
      <Link href="/signup" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          sx={{
            height: "3rem",
            borderRadius: "0.5rem",
            width: "100%",
          }}
        >
          <Typography
            variant="body1"
            textTransform="none"
            px="0.6rem"
            fontWeight={500}
          >
            View all teams
          </Typography>
        </Button>
      </Link>
    </Stack>
  )
}

export function SliderButtons({ variant }: Variant) {
  const renderButtons = () => {
    switch (variant) {
      case "hero":
        return <HeroesSliderButtons />
      case "quest":
        return <QuestsSliderButtons />
      case "team":
        return <TeamsSliderButtons />
    }
  }
  return renderButtons()
}
