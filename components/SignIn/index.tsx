import { Typography, Link } from "@mui/material"
import { Stack } from "@mui/system"
import { EmailSignIn } from "./EmailSignIn"
import { ProvidersSignIn } from "./ProvidersSignIn"

export function SignIn() {
  return (
    <Stack>
      <EmailSignIn />
      <ProvidersSignIn />
      <Stack direction="row" justifyContent="center" spacing={1} mt="2rem">
        <Typography variant="body1">Don't have an account?</Typography>
        <Link href="#">Sign up</Link>
      </Stack>
    </Stack>
  )
}
