import { Stack, Typography, Link } from "@mui/material"
import { GoogleSignIn } from "components/SocialSignIn/GoogleSignIn"
import { EmailSignUp } from "./EmailSignUp"

export function SignUp() {
  return (
    <Stack m="auto" width="25rem">
      <EmailSignUp />
      <GoogleSignIn />
      <Stack direction="row" justifyContent="center" spacing={1} mt="2rem">
        <Typography variant="body1">Already have an account?</Typography>
        <Link href="#">Log in</Link>
      </Stack>
    </Stack>
  )
}
