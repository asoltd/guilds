import { Typography, Link } from "@mui/material"
import { Stack } from "@mui/system"
import { GoogleSignIn } from "components/SocialSignIn/GoogleSignIn"
import { EmailSignIn } from "./EmailSignIn"

export function SignIn() {
  return (
    <Stack m="auto" width="25rem" spacing="1rem">
      <EmailSignIn />
      <GoogleSignIn />
      <Stack direction="row" justifyContent="center" spacing={1} mt="2rem">
        <Typography variant="body1">Don't have an account?</Typography>
        <Link href="#">Sign up</Link>
      </Stack>
    </Stack>
  )
}
