import styled from "@emotion/styled"
import { useTheme } from "@mui/material/styles"
import Link from "next/link"
import Image from "next/image"
import { Stack, Typography, useMediaQuery, Box, Avatar } from "@mui/material"

const Heading = styled(Typography)({
  color: "#101828",
  fontSize: "1.125rem",
  lineHeight: "1.75rem",
  fontWeight: 500,
})

interface SmallUserCardProps {
  photo: string
  name: string
  title: string
}

interface MediumUserCardProps {
  photo: string
  name: string
  level: string
  tagline: string
  twitter: string
  linkedin: string
  instagram: string
}

export function SmallUserCard({ photo, name, title }: SmallUserCardProps) {
  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      sx={{
        height: "100%",
        border: "1px solid #EAECF0",
        borderRadius: "8px",
        boxShadow:
          "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);",
      }}
    >
      <Avatar src={photo} sx={{ width: 80, height: 80, margin: 3 }} />
      <Stack>
        <Heading>{name}</Heading>
        <Typography
          sx={{
            fontWeight: 400,
            size: "1rem",
            lineHeight: "1.5rem",
            color: "#667085",
            paddingRight: 2,
          }}
        >
          {title}
        </Typography>
      </Stack>
    </Stack>
  )
}

export function MediumUserCard({
  photo,
  name,
  level,
  tagline,
  twitter,
  linkedin,
  instagram,
}: MediumUserCardProps) {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Stack
      flexDirection={isSmall ? "column" : "row"}
      alignItems={isSmall ? "center" : null}
      sx={{
        height: "100%",
        border: "1px solid #EAECF0",
        borderRadius: "8px",
        boxShadow:
          "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);",
      }}
    >
      <Avatar src={photo} sx={{ width: 80, height: 80, margin: 4 }} />
      <Stack alignItems={isSmall ? "center" : null}>
        <Heading sx={{ marginTop: isSmall ? 0 : 4 }}>{name}</Heading>
        <Typography
          sx={{
            fontWeight: 400,
            size: "1rem",
            lineHeight: "1.5rem",
            color: "#498553",
          }}
        >
          {level}
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            size: "1rem",
            lineHeight: "1.5rem",
            color: "#667085",
            paddingY: 1,
            marginY: 2,
            textAlign: isSmall ? "center" : "left",
          }}
        >
          {tagline}
        </Typography>
        <Stack flexDirection="row" sx={{ marginBottom: 2 }}>
          <Box sx={{ marginRight: 2 }}>
            <Link href={twitter}>
              <Image src="/twitter.svg" alt="Twitter" width={20} height={20} />
            </Link>
          </Box>
          <Box sx={{ marginRight: 2 }}>
            <Link href={linkedin}>
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </Link>
          </Box>
          <Box sx={{ marginRight: 2 }}>
            <Link href={instagram}>
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
              />
            </Link>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  )
}
