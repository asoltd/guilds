import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { useAuth } from "reactfire"
import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  PhoneAuthProvider,
} from "firebase/auth"
import { Stack } from "@mui/system"

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    FacebookAuthProvider.PROVIDER_ID,
    TwitterAuthProvider.PROVIDER_ID,
    GithubAuthProvider.PROVIDER_ID,
    PhoneAuthProvider.PROVIDER_ID,
  ],
}

export function ProvidersSignIn() {
  const auth = useAuth()
  return (
    <Stack>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </Stack>
  )
}
