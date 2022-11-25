import Image from "next/image"
import { Button } from "@mui/material"
import { Stack } from "@mui/system"
import { signInWithPopup, AuthProvider } from "firebase/auth"
import { useAuth } from "reactfire"

export function SocialSignIn({ provider, image, bgcolor }) {
  const auth = useAuth()

  const SignInWithGoogle = async (provider: AuthProvider) => {
    const result = await signInWithPopup(auth, provider)
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
        onClick={() => SignInWithGoogle(provider)}
      >
        <Stack direction="row" spacing={2}>
          <Image width={24} height={24} src={image} alt="Social icon" />
        </Stack>
      </Button>
    </Stack>
  )
}
