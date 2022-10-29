import styled from "styled-components"
import { Button } from "@mui/material"
import { Stack } from "@mui/system"
import {
  signInWithPopup,
  GithubAuthProvider,
  UserCredential,
} from "firebase/auth"
import Image from "next/image"
import { useAuth } from "reactfire"

const GithubButton = styled(Button)({
  ":hover": {
    backgroundColor: "#000000",
  },
})

export function GithubSignIn() {
  const auth = useAuth()
  const GithubProvider = new GithubAuthProvider()
  const SignInWithGithub = (provider: GithubAuthProvider) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
      })
      .catch((error) => {
        alert("Error:" + error.message)
        const credential = GithubAuthProvider.credentialFromError(error)
      })
  }

  return (
    <Stack m="auto">
      <GithubButton
        variant="contained"
        sx={{ p: "0.5rem", bgcolor: "#000000" }}
        onClick={() => SignInWithGithub(GithubProvider)}
      >
        <Stack direction="row" spacing={2}>
          <Image width={30} height={30} src="/GithubIconWhite.svg"></Image>
        </Stack>
      </GithubButton>
    </Stack>
  )
}
