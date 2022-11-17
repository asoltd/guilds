import { Stack, Typography } from "@mui/material"
import { Container } from "@mui/system"

export function PageHeader({ greenSubtitle, header, greySubtitle }) {
  return (
    <Stack
      sx={{
        background: "#F9FAFB",
        mb: "4rem",
      }}
    >
      <Container>
        <Stack
          spacing={2}
          direction={"column"}
          justifyContent={"center"}
          height={"20rem"}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, color: "primary.main" }}
          >
            {greenSubtitle}
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 600 }}>
            {header}
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            {greySubtitle}
          </Typography>
        </Stack>
      </Container>
    </Stack>
  )
}
