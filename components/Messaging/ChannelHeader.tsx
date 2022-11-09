import { Chip, Divider, IconButton, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Image from "next/image"
import { useChatContext } from "stream-chat-react"
import { ChannelHeaderButtons } from "./ChannelHeaderButtons"

export function CustomChannelHeader(props) {
  const { channel, watchers, variant } = props
  const { channel: activeChannel } = useChatContext()

  return (
    <Stack px="1.5rem" bgcolor="background.default">
      <Stack
        height="5rem"
        direction="row"
        alignItems="center"
        spacing={4}
        justifyContent="space-between"
        px="1rem"
      >
        <Stack direction="row" alignItems="center" spacing={4}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              {activeChannel?.data?.name}
            </Typography>
            <Chip
              label={<Typography variant="body1">Online</Typography>}
              sx={{
                bgcolor: "primary.light",
                color: "primary.main",
                px: "0.5rem",
              }}
              icon={
                <Box
                  bgcolor="primary.main"
                  borderRadius="50%"
                  width="0.4rem"
                  height="0.4rem"
                />
              }
            />
          </Stack>
          <ChannelHeaderButtons variant={variant} />
        </Stack>
        <Stack direction="row" spacing={4} alignItems="center">
          <IconButton>
            <Image
              src="/voice-call.svg"
              width={20}
              height={20}
              alt="voice-call"
            />
          </IconButton>
          <IconButton>
            <Image
              src="/camera-call.svg"
              width={20}
              height={20}
              alt="camera-call"
            />
          </IconButton>
          <IconButton>
            <Image
              src="/dots-menu.svg"
              width={20}
              height={20}
              alt="dots-menu"
            />
          </IconButton>
        </Stack>
      </Stack>
      <Divider />
    </Stack>
  )
}
