import { Container, Stack, Typography, useMediaQuery } from "@mui/material"
import FeaturedCompany from "./FeaturedCompany"

function FeaturedCompaniesSmall() {
  return (
    <Stack direction="row" spacing={4}>
      <Stack spacing={4}>
        <FeaturedCompany image="/GuildsLogo2.svg" />
        <FeaturedCompany image="/GuildsLogo2.svg" />
        <FeaturedCompany image="/GuildsLogo2.svg" />
      </Stack>
      <Stack spacing={4}>
        <FeaturedCompany image="/GuildsLogo2.svg" />
        <FeaturedCompany image="/GuildsLogo2.svg" />
        <FeaturedCompany image="/GuildsLogo2.svg" />
      </Stack>
    </Stack>
  )
}

function FeaturedCompaniesLarge() {
  return (
    <Stack direction="row" spacing={4}>
      <Stack spacing={4}>
        <FeaturedCompany image="/GuildsLogo2.svg" />
        <FeaturedCompany image="/GuildsLogo2.svg" />
      </Stack>
      <Stack spacing={4}>
        <FeaturedCompany image="/GuildsLogo2.svg" />
        <FeaturedCompany image="/GuildsLogo2.svg" />
      </Stack>
      <Stack spacing={4}>
        <FeaturedCompany image="/GuildsLogo2.svg" />
        <FeaturedCompany image="/GuildsLogo2.svg" />
      </Stack>
    </Stack>
  )
}

function FeaturedCompaniesRegular() {
  return (
    <Stack direction="row" spacing={4}>
      <FeaturedCompany image="/GuildsLogo2.svg" />
      <FeaturedCompany image="/GuildsLogo2.svg" />
      <FeaturedCompany image="/GuildsLogo2.svg" />
      <FeaturedCompany image="/GuildsLogo2.svg" />
      <FeaturedCompany image="/GuildsLogo2.svg" />
      <FeaturedCompany image="/GuildsLogo2.svg" />
    </Stack>
  )
}

export default function FeaturedCompanies() {
  const isMobileSmall = useMediaQuery("(max-width: 600px)")
  const isMobileLarge = useMediaQuery("(max-width: 950px)")

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      spacing={4}
      sx={{
        bgcolor: "primary.main",
        borderRadius: "0.8rem",
        height: isMobileLarge ? "20rem" : "12rem",
      }}
    >
      {isMobileLarge && (
        <Typography
          variant="body1"
          color="background.default"
          sx={{ opacity: 0.5 }}
        >
          Trusted by 4000+ companies
        </Typography>
      )}
      <Container>
        <Stack
          direction={isMobileLarge ? "column" : "row"}
          justifyContent="space-around"
          width="100%"
          textAlign="center"
          alignItems="center"
          spacing={isMobileLarge ? 2 : 0}
          sx={{
            color: "background.default",
            opacity: 0.5,
          }}
        >
          {isMobileSmall ? (
            <FeaturedCompaniesSmall />
          ) : isMobileLarge ? (
            <FeaturedCompaniesLarge />
          ) : (
            <FeaturedCompaniesRegular />
          )}
        </Stack>
      </Container>
    </Stack>
  )
}
