import { Stack } from "@mui/system"
import { EmailSignIn } from "./EmailSignIn"
import { ProvidersSignIn } from "./ProvidersSignIn"

export function index() {
  return (
    <Stack>
      <EmailSignIn />
      <ProvidersSignIn />
    </Stack>
  )
}
