import { Box, Button, Stack, Typography } from "@mui/material"

export function ChannelHeaderButtons({ variant }) {
  return (
    <Box>
      {variant == "freelancer" ? (
        <Button
          variant="outlined"
          sx={{
            color: "text.primary",
            borderColor: (theme) => theme.palette.grey[300],
            borderRadius: "0.5rem",
            textTransform: "none",
            height: "2.7rem",
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Hire a mentor
          </Typography>
        </Button>
      ) : (
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            sx={{
              color: "text.primary",
              borderColor: (theme) => theme.palette.grey[300],
              borderRadius: "0.5rem",
              textTransform: "none",
              height: "2.7rem",
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              Hire as freelancer
            </Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "text.primary",
              borderColor: (theme) => theme.palette.grey[300],
              borderRadius: "0.5rem",
              textTransform: "none",
              height: "2.7rem",
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              View proposal
            </Typography>
          </Button>
        </Stack>
      )}
    </Box>
  )
}
