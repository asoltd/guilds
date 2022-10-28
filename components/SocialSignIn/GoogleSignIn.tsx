import { Button } from "@mui/material"
import { Stack } from "@mui/system"
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
} from "firebase/auth"

export function GoogleSignIn() {
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
      <Button onClick={() => SignInWithGoogle(googleProvider)}>CHUJ</Button>
    </Stack>
  )
}
