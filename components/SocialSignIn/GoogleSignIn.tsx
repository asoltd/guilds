import styled from "styled-components"
import { Button } from "@mui/material"
import { Stack } from "@mui/system"
import {
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
} from "firebase/auth"
import Image from "next/image"
import { useAuth } from "reactfire"

const GoogleButton = styled(Button)({
  ":hover": {
    backgroundColor: "#FFFFFF",
  },
})

export function GoogleSignIn() {
  const auth = useAuth()
  const googleProvider = new GoogleAuthProvider()
  const SignInWithGoogle = (provider: GoogleAuthProvider) => {
    signInWithPopup(auth, provider)
      .then((result: UserCredential) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
      })
      .catch((error) => {
        alert("Error:" + error.message)
        const credential = GoogleAuthProvider.credentialFromError(error)
      })
  }

  return (
    <Stack m="auto">
      <GoogleButton
        variant="contained"
        sx={{ p: "0.5rem", bgcolor: "background.default" }}
        onClick={() => SignInWithGoogle(googleProvider)}
      >
        <Stack direction="row" spacing={2}>
          <Image width={24} height={24} src="/GoogleIcon.svg"></Image>
        </Stack>
      </GoogleButton>
    </Stack>
  )
}
