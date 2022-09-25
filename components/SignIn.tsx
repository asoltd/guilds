import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { useAuth } from "reactfire"
import {
  EmailAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  PhoneAuthProvider,
} from "firebase/auth"

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [
    EmailAuthProvider.PROVIDER_ID,
    GoogleAuthProvider.PROVIDER_ID,
    FacebookAuthProvider.PROVIDER_ID,
    TwitterAuthProvider.PROVIDER_ID,
    GithubAuthProvider.PROVIDER_ID,
    PhoneAuthProvider.PROVIDER_ID,
  ],
}

export function SignIn() {
  const auth = useAuth()
  return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
}
