import Image from "next/image"
import { Stack, Typography } from "@mui/material"
import { CardVariant } from "cards"

interface Card {
  title: string
  owner: string
  date: string
  number: string
}

interface CardProps {
  card: Card
  variant: CardVariant
}

export function Card({ card, variant }: CardProps) {
  return (
    <Stack
      position="relative"
      width={316}
      height={190}
      borderRadius="20px"
      overflow="hidden"
    >
      <Image src={variant.image} alt="Credit Card" width={316} height={190} />
      <Stack
        position="absolute"
        p="1rem"
        width="100%"
        height="100%"
        justifyContent="space-between"
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h6" fontWeight={600} color={variant.titleColor}>
            {card.title}
          </Typography>
          <Image src="/vector.svg" alt="Vector" width={22} height={27} />
        </Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="end">
          <Stack spacing={1} color={variant.dataColor}>
            <Stack
              direction="row"
              justifyContent="space-between"
              maxWidth="15rem"
              spacing={2}
              alignItems="center"
              sx={{
                wordSpacing: "0.2rem",
              }}
            >
              <Typography variant="body2" textTransform="uppercase">
                {card.owner}
              </Typography>
              <Typography variant="body2">{card.date}</Typography>
            </Stack>
            <Stack direction="row">
              <Typography
                variant="body1"
                fontWeight={600}
                sx={{
                  wordSpacing: "0.4rem",
                }}
              >
                {card.number}
              </Typography>
            </Stack>
          </Stack>
          <Image
            src={variant.company}
            alt="Mastercard"
            width={44}
            height={31}
          />
        </Stack>
      </Stack>
    </Stack>
  )
}
