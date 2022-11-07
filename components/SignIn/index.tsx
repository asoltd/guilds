import { Stack, Typography, Link, Box } from "@mui/material"
import { SocialSignIn } from "components/SocialSignIn"
import { EmailSignIn } from "./EmailSignIn"
import { providers } from "../SocialSignIn/providers"

export function SignIn() {
  return (
    <Box py="5rem">
      <Stack m="auto" width="25rem" spacing="1rem">
        <EmailSignIn />
        <Stack direction="row">
          {providers.map((provider) => (
            <SocialSignIn key={provider.image} {...provider} />
          ))}
        </Stack>
        <Stack direction="row" justifyContent="center" spacing={1} mt="2rem">
          <Typography variant="body1">Don't have an account?</Typography>
          <Link href="/signup">Sign up</Link>
        </Stack>
      </Stack>
    </Box>
  )
}
