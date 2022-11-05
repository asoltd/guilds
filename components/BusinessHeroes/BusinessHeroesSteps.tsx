import Image from "next/image"
import { Box, Stack, Typography } from "@mui/material"

interface Step {
  label: string
  description: string
  image: string
  alt: string
}

const steps: Step[] = [
  {
    label: "Create a business account",
    description:
      "Example text. Example text. Example text. Example text. Example text. Example text.",
    image: "/create-business-account-step.svg",
    alt: "Create a business account",
  },
  {
    label: "Create a quest",
    description:
      "Example text. Example text. Example text. Example text. Example text. Example text.",
    image: "/create-quest-step.svg",
    alt: "Create a quest",
  },
  {
    label: "Choose a winner",
    description:
      "Example text. Example text. Example text. Example text. Example text. Example text.",
    image: "/choose-winner-step.svg",
    alt: "Choose a winner",
  },
]

interface BusinessHeroesStepsProps {
  businessSteps: Step[]
}

export function BusinessHeroesSteps({
  businessSteps = steps,
}: BusinessHeroesStepsProps) {
  return (
    <Stack spacing={7} justifyContent="center">
      {businessSteps.map((step) => (
        <Stack direction="row" spacing={2}>
          <Box>
            <Image src={step.image} width={48} height={48} alt={step.alt} />
          </Box>
          <Stack>
            <Typography variant="h6" lineHeight="48px">
              {step.label}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {step.description}
            </Typography>
          </Stack>
        </Stack>
      ))}
    </Stack>
  )
}
