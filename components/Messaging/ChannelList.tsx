import { Box, Chip, IconButton, Stack, Typography } from "@mui/material"
import Image from "next/image"
import { Avatar, useChatContext } from "stream-chat-react"
import { MoreHoriz } from "@mui/icons-material"

export function CustomListContainer(props) {
  const { children } = props
  console.log("props", props)
  return (
    <Box bgcolor="background.paper" height="100%">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        px="1.5rem"
        py="0.5rem"
      >
        <Typography
          variant="h6"
          sx={{
            borderBottom: "1px solid",
            borderColor: (theme) => theme.palette.grey[300],
          }}
        >
          Messages
        </Typography>
        <IconButton>
          <MoreHoriz href={""} />
        </IconButton>
      </Stack>
      {children}
    </Box>
  )
}

export function CustomListItem(props) {
  const { channel, setActiveChannel, watchers, unread } = props
  const { channel: activeChannel } = useChatContext()
  const image = channel.state.members["imZrHGqnOCfGy44ya596jOyNHIG3"].user.image

  const renderMessageText = () => {
    const lastMessageText =
      channel.state.messages[channel.state.messages.length - 1]?.text
    const text = lastMessageText || "message text"
    return text.length < 15 ? lastMessageText : `${text.slice(0, 15)}...`
  }

  return (
    <Stack
      onClick={() => setActiveChannel(channel, watchers)}
      direction="row"
      height="4rem"
      spacing={3}
      alignItems="center"
      justifyContent="space-between"
      p="1.5rem"
      bgcolor={
        channel?.id === activeChannel?.id
          ? "background.default"
          : "background.paper"
      }
      sx={{
        borderBottom: "1px solid",
        borderColor: (theme) => theme.palette.grey[300],
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <Avatar image={image} />
        <Stack>
          <Typography variant="body1" fontWeight={500}>
            {channel.data.name}
          </Typography>
          <Typography
            variant="body2"
            fontWeight={400}
            color={(theme) => theme.palette.grey[500]}
          >
            {renderMessageText()}
          </Typography>
        </Stack>
      </Stack>
      {unread > 0 && (
        <Chip label={unread} sx={{ bgcolor: "#FEE4E2", color: "#B42318" }} />
      )}
    </Stack>
  )
}
