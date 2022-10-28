import { Button, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
} from "firebase/auth"
import Image from "next/image"

export function GoogleSignIn(text) {
  const auth = getAuth()
  const googleProvider = new GoogleAuthProvider()
  const SignInWithGoogle = (provider: GoogleAuthProvider) => {
    signInWithPopup(auth, provider)
      .then((result: UserCredential) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
        alert("Logged in as:" + user.email)
      })
      .catch((error) => {
        alert("Error code:" + error.code)
        alert("Error:" + error.message)
        alert("Email error:" + error.customData.email)
        const credential = GoogleAuthProvider.credentialFromError(error)
      })
  }

  return (
    <Stack width="25rem" m="auto">
      <Button
        variant="outlined"
        sx={{ p: "0.5rem" }}
        onClick={() => SignInWithGoogle(googleProvider)}
      >
        <Stack direction="row" spacing={2}>
          <Image width="24" height="24" src="/GoogleIcon.svg"></Image>
          <Typography textTransform="none" variant="body1" color="text.primary">
            Sign in with google
          </Typography>
        </Stack>
      </Button>
    </Stack>
  )
}
