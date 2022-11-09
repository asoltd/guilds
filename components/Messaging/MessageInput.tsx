import { Box, Stack, TextField } from "@mui/material"
import { ReactEventHandler, useEffect, useRef, useState } from "react"
import { useUser } from "reactfire"
import {
  useChannelActionContext,
  useMessageContext,
  useMessageInputContext,
} from "stream-chat-react"
import TextIcons from "./TextIcons"

export function CustomMessageInput(props) {
  const [fontStyle, setFontStyle] = useState({
    fontSize: 14,
  })
  const { text, setText } = useMessageInputContext()
  const { sendMessage } = useChannelActionContext()

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [text])

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      if (text) {
        sendMessage({ text: text, attachments: [fontStyle] })
      }
      setText("")
    }
  }

  return (
    <Stack px="2rem" py="1.5rem" bgcolor="background.default" spacing={1}>
      <Stack direction="row" justifyContent="flex-end">
        <TextIcons
          fontStyle={fontStyle}
          setFontStyle={setFontStyle}
          text={text}
          setText={setText}
        />
      </Stack>
      <TextField
        multiline
        rows={2}
        size="small"
        sx={{
          p: 0,
          "& .MuiOutlinedInput-root": {
            backgroundColor: "background.default",
            borderRadius: "0.5rem",
            borderColor: (theme) => theme.palette.grey[300],
          },
          "& .MuiOutlinedInput-input": {
            ...fontStyle,
          },
        }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </Stack>
  )
}
