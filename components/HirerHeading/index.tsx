import { Box, Container, Stack, Typography } from "@mui/material"
import { NewFeatureChip } from "./NewFeatureChip"
import { DashboardPreview } from "./DashboardPreview"
import { HirerHeadingButtons } from "./HirerHeadingButtons"

export function HirerHeading() {
  return (
    <Stack alignItems="center" spacing={7}>
      <Container maxWidth="md">
        <Stack alignItems="center" spacing={4}>
          <NewFeatureChip />
          <Stack direction="row" justifyContent="space-around">
            <Typography variant="h1">
              Get the job done{" "}
              <Box component="span" color="primary.main">
                faster
              </Box>
            </Typography>
          </Stack>
          <Typography variant="h5" textAlign="center">
            Gain access to our tribe of over three thousand heroes and unleash
            the power of group-working and speed!
          </Typography>
          <HirerHeadingButtons />
        </Stack>
      </Container>
      <DashboardPreview />
    </Stack>
  )
}
