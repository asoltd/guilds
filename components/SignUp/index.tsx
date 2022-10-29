import { Stack, Typography, Link } from "@mui/material"
import {
  FacebookSignIn,
  GithubSignIn,
  TwitterSignIn,
} from "components/SocialSignIn"
import { GoogleSignIn } from "components/SocialSignIn/GoogleSignIn"
import { EmailSignUp } from "./EmailSignUp"

export function SignUp() {
  return (
    <Stack m="auto" width="25rem" spacing="1rem">
      <EmailSignUp />
      <Stack direction="row">
        <GoogleSignIn />
        <TwitterSignIn />
        <GithubSignIn />
        <FacebookSignIn />
      </Stack>
      <Stack direction="row" justifyContent="center" spacing={1} mt="2rem">
        <Typography variant="body1">Already have an account?</Typography>
        <Link href="#">Log in</Link>
      </Stack>
    </Stack>
  )
}
