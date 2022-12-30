import Image from "next/image"
import Link from "next/link"
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Stack,
  AlertColor,
  Snackbar,
  Alert,
} from "@mui/material"
import { useAuth } from "reactfire"
import {
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth"
import { Form, Formik, FormikProps } from "formik"
import { useState } from "react"

interface FormValues {
  email: string
  password: string
  remember: boolean
}

export function EmailSignIn() {
  const [severity, setSeverity] = useState<AlertColor>("info")
  const [message, setMessage] = useState("")
  const [open, setOpen] = useState(false)
  const auth = useAuth()

  // TODO(JakubFrackowiak) This is not even resetting password
  async function resetPassword() {
    try {
      await sendEmailVerification(auth.currentUser)
      setSeverity("info")
      setMessage("Email sent")
    } catch (error) {
      setSeverity("error")
      setMessage(error.message)
      setOpen(true)
    } finally {
      setOpen(true)
    }
  }

  async function handleSubmit(values: FormValues) {
    const { email, password } = values
    try {
      await signInWithEmailAndPassword(auth, email, password)
      setMessage("Signed in successfully")
      setSeverity("success")
    } catch (error) {
      setSeverity("error")
      setMessage(error.message)
    } finally {
      setOpen(true)
    }
  }

  return (
    <Stack
      alignItems="center"
      justifyContent="space-around"
      spacing={3}
      width="100%"
    >
      <Image
        width="50"
        height="50"
        src={"/GuildsLogo2.svg"}
        alt="Guilds logo"
      />
      <Typography fontWeight="600" variant="h4">
        Log in to your account
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Welcome back! Please enter your details
      </Typography>
      <Formik
        initialValues={{
          email: "",
          password: "",
          remember: false,
        }}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ handleSubmit, handleChange, values }: FormikProps<FormValues>) => (
          <Form onSubmit={handleSubmit}>
            <Stack spacing={2} width="25rem">
              <Stack>
                <Typography variant="body1">Email</Typography>
                <TextField
                  onChange={handleChange}
                  value={values.email}
                  size="small"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </Stack>
              <Stack>
                <Typography variant="body1">Password</Typography>
                <TextField
                  onChange={handleChange}
                  value={values.password}
                  size="small"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                />
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <FormControlLabel
                  name="remember"
                  onChange={handleChange}
                  value={values.remember}
                  control={<Checkbox />}
                  label="Remember for 30 days"
                />
                <Link href="/reset-password">Forgot password</Link>
              </Stack>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  textTransform: "none",
                  height: "2.8rem",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert severity={severity}>{message}</Alert>
      </Snackbar>
    </Stack>
  )
}
