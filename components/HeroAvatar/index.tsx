import styled from "styled-components"
import { StorageImage } from "reactfire"
import { Typography, Stack, Rating } from "@mui/material"
import { Hero } from "storage/hero"

const HeroImage = styled(StorageImage)({
  objectFit: "cover",
  height: 592,
  width: 576,
})

interface HeroAvatarProps {
  hero: Hero
}

export function HeroAvatar({ hero }: HeroAvatarProps) {
  const rating = Math.round(hero?.rating * 2) / 2
  return (
    <Stack position="relative">
      <HeroImage storagePath="heroes/hero.jpeg" />
      <Stack
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          backdropFilter: "blur(0.8rem)",
          borderTop: "1px solid rgba(255, 255, 255, 0.3)",
          p: "1.5rem",
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h3" fontWeight={600} color="background.default">
            {`${hero?.name.first} ${hero?.name.second} ${hero?.name.last}`}
          </Typography>
          <Rating
            name="read-only"
            value={rating}
            precision={0.5}
            readOnly
            sx={{
              "& .MuiRating-iconFilled": {
                color: "background.default",
              },
              "& .MuiRating-iconEmpty": {
                color: "background.default",
              },
            }}
          />
        </Stack>
        <Stack>
          <Typography variant="h6" color="background.default" fontWeight={600}>
            {hero?.experience[0]?.company}
          </Typography>
          <Typography
            variant="body1"
            color="background.default"
            fontWeight={400}
          >
            {hero?.experience[0].position}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}
