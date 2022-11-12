import { Stack, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import {
  useChannelActionContext,
  useMessageInputContext,
} from "stream-chat-react"
import TextIcons from "./TextIcons"

export function CustomMessageInput() {
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
        sendMessage({ text })
      }
      setText("")
    }
    if (e.key === "Enter" && e.shiftKey) {
      setText(text + "\n")
    }
  }

  return (
    <Stack px="2rem" py="1rem" bgcolor="background.default" spacing={1}>
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
            height: "4rem",
          },
        }}
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
    </Stack>
  )
}
