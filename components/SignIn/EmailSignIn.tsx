import Image from "next/image"
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Link,
} from "@mui/material"
import { Stack } from "@mui/system"
import { useAuth } from "reactfire"
import { signInWithEmailAndPassword } from "firebase/auth"
import { Form, Formik, FormikFormProps, FormikProps } from "formik"

interface FormValues {
  email: string
  password: string
  remember: boolean
}

export function EmailSignIn() {
  const auth = useAuth()
  const handleSubmit = (values: FormValues) => {
    const { email, password } = values
    console.log("values", values)
    try {
      signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      alert("Error:" + error.message)
    }
  }

  return (
    <Stack
      alignItems="center"
      justifyContent="space-around"
      spacing={3}
      width="100%"
    >
      <Image width="50" height="50" src={"/GuildsLogoGrey.svg"} />
      <Typography fontWeight="600" variant="h4">
        Log in to your account
      </Typography>
      <Typography variant="h6" sx={{ color: "text.secondary" }}>
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
            <Stack spacing={2}>
              <Stack>
                <Typography variant="body1">Email</Typography>
                <TextField
                  onChange={handleChange}
                  value={values.email}
                  size="small"
                  sx={{ width: "22rem" }}
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
                  sx={{ width: "22rem" }}
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
                <Link href="#">Forgot password</Link>
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
