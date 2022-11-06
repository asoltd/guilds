import styled from "styled-components"
import { Button } from "@mui/material"
import { Stack } from "@mui/system"
import {
  signInWithPopup,
  FacebookAuthProvider,
  UserCredential,
} from "firebase/auth"
import Image from "next/image"
import { useAuth } from "reactfire"

const GoogleButton = styled(Button)({
  ":hover": {
    backgroundColor: "#4267B2",
  },
})

export function FacebookSignIn() {
  const auth = useAuth()
  const facebookProvider = new FacebookAuthProvider()
  const SignInWithFacebook = (provider: FacebookAuthProvider) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        const credential = FacebookAuthProvider.credentialFromResult(result)
        const accessToken = credential.accessToken
      })
      .catch((error) => {
        alert("Error:" + error.message)
        const credential = FacebookAuthProvider.credentialFromError(error)
      })
  }

  return (
    <Stack m="auto">
      <GoogleButton
        variant="contained"
        sx={{ p: "0.5rem", bgcolor: " #4267B2" }}
        onClick={() => SignInWithFacebook(facebookProvider)}
      >
        <Stack direction="row" spacing={2}>
          <Image width={30} height={30} src="/FacebookIcon.svg"></Image>
        </Stack>
      </GoogleButton>
    </Stack>
  )
}
