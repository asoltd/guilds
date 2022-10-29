import styled from "styled-components"
import { Button } from "@mui/material"
import { Stack } from "@mui/system"
import {
  signInWithPopup,
  TwitterAuthProvider,
  UserCredential,
} from "firebase/auth"
import Image from "next/image"
import { useAuth } from "reactfire"

const TwitterButton = styled(Button)({
  ":hover": {
    backgroundColor: "#1DA1F2",
  },
})

export function TwitterSignIn() {
  const auth = useAuth()
  const twitterProvider = new TwitterAuthProvider()
  const SignInWithTwitter = (provider: TwitterAuthProvider) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = TwitterAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const secret = credential.secret
        const user = result.user
      })
      .catch((error) => {
        alert("Error:" + error.message)
        const credential = TwitterAuthProvider.credentialFromError(error)
      })
  }
  return (
    <Stack m="auto">
      <TwitterButton
        variant="contained"
        sx={{ p: "0.5rem", bgcolor: "#1DA1F2" }}
        onClick={() => SignInWithTwitter(twitterProvider)}
      >
        <Stack direction="row" spacing={2}>
          <Image width={28} height={28} src="/TwitterIconWhite.svg"></Image>
        </Stack>
      </TwitterButton>
    </Stack>
  )
}
