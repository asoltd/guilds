import { Chip, Stack, Typography } from "@mui/material"
import Image from "next/image"

export function NewFeatureChip() {
  return (
    <Chip
      size="medium"
      sx={{
        bgcolor: "primary.light",
        width: "fit-content",
      }}
      icon={
        <Chip
          size="small"
          sx={{ bgcolor: "white" }}
          label={<Typography color="primary">New feature</Typography>}
        />
      }
      label={
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography color="primary">Check the team dashboard</Typography>
          <Image
            width={13}
            height={13}
            src="/arrow-right.svg"
            alt="arrow right"
          />
        </Stack>
      }
    />
  )
}
