import styled from "styled-components"
import { StorageImage } from "reactfire"
import { Typography, Stack, Rating } from "@mui/material"
import { Hero } from "storage/hero"
import { useEffect, useState } from "react"

const HeroImage = styled(StorageImage)({
  objectFit: "cover",
})

interface AvatarSize {
  width: number
  height: number
}

interface HeroAvatarProps {
  hero: Hero
  size: string
}

export function HeroAvatar({ hero, size }: HeroAvatarProps) {
  const [avatarSize, setAvatarSize] = useState<AvatarSize>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    switch (size) {
      case "small":
        setAvatarSize({ width: 360, height: 480 })
        break
      case "medium":
        setAvatarSize({ width: 576, height: 592 })
        break
      case "large":
        setAvatarSize({ width: 720, height: 800 })
        break
      default:
    }
  }, [size])

  return (
    <Stack position="relative">
      <HeroImage storagePath={hero.profilePicture} {...avatarSize} />
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
        <Stack
          direction={size == "small" ? "column-reverse" : "row"}
          justifyContent="space-between"
        >
          <Typography
            variant={size == "small" ? "h4" : "h3"}
            fontWeight={600}
            color="background.default"
          >
            {`${hero?.name.first} ${hero?.name.last}`}
          </Typography>
          <Rating
            name="read-only"
            value={hero.rating}
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
