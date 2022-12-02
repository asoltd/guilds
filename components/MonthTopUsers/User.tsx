import Image from "next/image"
import Link from "next/link"
import { Stack, Typography } from "@mui/material"
import { StorageImage } from "reactfire"
import { Hero } from "types/hero"

interface UserProps {
  hero: Hero
  xpGained: number
}

export function User({ hero, xpGained }: UserProps) {
  const lastPosition = hero.experience[hero.experience.length - 1].position
  const lastCompany = hero.experience[hero.experience.length - 1].company
  return (
    <Stack justifyContent="space-between" height="18rem" p="1rem">
      <Stack spacing={1}>
        <StorageImage
          storagePath={`general/${hero.profilePicture}`}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <Stack>
          <Typography variant="h6" fontWeight={500}>
            {hero.name.first} {hero.name.last}
          </Typography>
          <Typography variant="body1" color="primary.main">
            {xpGained} XP gained
          </Typography>
        </Stack>
        <Typography variant="body1" color="text.secondary" width="15em">
          {lastPosition} at {lastCompany}
        </Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        {hero.twitter ? (
          <Link href={hero.twitter}>
            <Image
              src="/twitter.svg"
              width={20}
              height={20}
              alt="twitterIcon"
            />
          </Link>
        ) : null}
        {hero.linkedin ? (
          <Link href={hero.linkedin}>
            <Image
              src="/linkedIn.svg"
              width={20}
              height={20}
              alt="linkedInIcon"
            />
          </Link>
        ) : null}
        {hero.website ? (
          <Link href={hero.website}>
            <Image
              src="/website-icon.svg"
              width={20}
              height={20}
              alt="linkedInIcon"
            />
          </Link>
        ) : null}
      </Stack>
    </Stack>
  )
}
