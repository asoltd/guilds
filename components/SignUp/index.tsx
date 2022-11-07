import { Stack, Typography, Link, Box } from "@mui/material"
import { SocialSignIn } from "components/SocialSignIn"
import { EmailSignUp } from "./EmailSignUp"
import { providers } from "../SocialSignIn/providers"

export function SignUp() {
  return (
    <Box py="5rem">
      <Stack m="auto" width="25rem" spacing="1rem">
        <EmailSignUp />
        <Stack direction="row">
          {providers.map((provider) => (
            <SocialSignIn key={provider.image} {...provider} />
          ))}
        </Stack>
        <Stack direction="row" justifyContent="center" spacing={1} mt="2rem">
          <Typography variant="body1">Already have an account?</Typography>
          <Link href="/login">Log in</Link>
        </Stack>
      </Stack>
    </Box>
  )
}
