import Image from "next/image"
import { Button, Snackbar, Alert, AlertColor } from "@mui/material"
import { Stack } from "@mui/system"
import { signInWithPopup, AuthProvider } from "firebase/auth"
import { useAuth } from "reactfire"
import { useState } from "react"

export function SocialSignIn({ provider, image, bgcolor }) {
  const auth = useAuth()
  const [severity, setSeverity] = useState<AlertColor>("info")
  const [message, setMessage] = useState("")
  const [open, setOpen] = useState(false)

  const signInWithProvider = async (provider: AuthProvider) => {
    try {
      const result = await signInWithPopup(auth, provider)

      if (result.operationType === "signIn") {
        setMessage("Signed in successfully")
      } else if (result.operationType === "link") {
        setMessage("Linked successfully")
      } else if (result.operationType === "reauthenticate") {
        setMessage("Reauthenticated successfully")
      }

      setSeverity("success")
      setOpen(true)
    } catch (error) {
      setSeverity("error")
      setMessage(error.message)
      setOpen(true)
    }
  }

  return (
    <Stack m="auto">
      <Button
        variant="contained"
        sx={{
          p: "0.5rem",
          bgcolor: bgcolor,
          ":hover": {
            bgcolor: bgcolor,
          },
        }}
        onClick={() => signInWithProvider(provider)}
      >
        <Stack direction="row" spacing={2}>
          <Image width={24} height={24} src={image} alt="Social icon" />
        </Stack>
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert severity={severity}>{message}</Alert>
      </Snackbar>
    </Stack>
  )
}
