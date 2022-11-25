import Image from "next/image"
import Link from "next/link"
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Stack,
} from "@mui/material"
import { useAuth } from "reactfire"
import {
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth"
import { Form, Formik, FormikProps } from "formik"

interface FormValues {
  email: string
  password: string
  remember: boolean
}

export function ResetPassword() {
  const auth = useAuth()
  sendEmailVerification(auth.currentUser).then(() => {
    alert("Email sent!")
  })
}

export function EmailSignIn() {
  const auth = useAuth()
  const handleSubmit = (values: FormValues) => {
    const { email, password } = values

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Logged in as:" + userCredential.user.email)
      })
      .catch((error) => {
        alert("Error:" + error.message)
      })
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
                <Link href="/">Forgot password</Link>
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
    </Stack>
  )
}
