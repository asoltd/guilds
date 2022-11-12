import { Box, Stack, Typography } from "@mui/material"
import {
  Avatar,
  useChannelStateContext,
  useMessageContext,
} from "stream-chat-react"
import dateformat from "dateformat"
import { renderText } from "stream-chat-react"

export function CustomMessage() {
  const { message } = useMessageContext()
  const { messages } = useChannelStateContext()

  const previousMessage = messages[messages.indexOf(message) - 1]
  const lastMessage = messages[messages.length - 1]
  const displayUser = previousMessage?.user?.id !== message?.user?.id
  const messageTime = dateformat(message.created_at, "h:MM TT")

  return (
    <Stack direction="row">
      {displayUser ? (
        <Avatar image={message.user.image} name={message.user.name} size={50} />
      ) : (
        <Box width={58} />
      )}
      <Stack direction="column" spacing={0.5}>
        {displayUser && (
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="h6" fontWeight={500}>
              {message.user?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {messageTime}
            </Typography>
          </Stack>
        )}
        <Typography
          variant="body1"
          color="text.secondary"
          sx={message.attachments[0]}
        >
          {message.text}
        </Typography>
      </Stack>
    </Stack>
  )
}
