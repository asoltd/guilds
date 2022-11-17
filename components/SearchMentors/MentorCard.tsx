import { Box, Stack, Typography, Button } from "@mui/material"
import LinesElipsis from "react-lines-ellipsis"
import styled from "styled-components"
import { StorageImage } from "reactfire"
import { Hero } from "storage/hero"

interface MentorProps {
  mentor: Hero
}

export function MentorCard({ mentor }: MentorProps) {
  const MentorPicture = styled(StorageImage)({
    objectFit: "cover",
    height: 290,
  })

  return (
    <Box sx={{ maxWidth: 280, p: 1 }}>
      <Stack spacing={3}>
        <MentorPicture storagePath={`${mentor.profilePicture}`} />
        <Stack spacing={0.5}>
          <Typography variant="h6" fontWeight={500} color="text.primary">
            {mentor.mentor.skill}
          </Typography>
          <Typography
            variant="body1"
            fontWeight={200}
            color="text.secondary"
          >{`${mentor.name.first} ${mentor.name.last}`}</Typography>
          <Typography
            variant="body1"
            fontWeight={400}
            color="primary.main"
          >{`Between £${mentor.mentor.minRate} - £${mentor.mentor.maxRate} p/h`}</Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary" align="justify">
          <LinesElipsis
            text={mentor.mentor.bio}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="words"
          />
        </Typography>
        <Box sx={{ justifyContent: "flex-start" }}>
          <Button
            variant="outlined"
            size="medium"
            sx={{
              height: "3rem",
            }}
          >
            <Typography variant="body1" textTransform="none" fontWeight={500}>
              Message {mentor.name.first}
            </Typography>
          </Button>
        </Box>
      </Stack>
    </Box>
  )
}
