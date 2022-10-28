import Image from "next/image"
import { Button, TextField, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { useAuth } from "reactfire"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { Form, Formik, FormikProps } from "formik"

interface FormValues {
  email: string
  password: string
  confirmPassword: string
  remember: boolean
}

export function EmailSignUp() {
  const auth = useAuth()
  const handleSubmit = (values: FormValues) => {
    const { email, password } = values
    console.log("values", values)

    createUserWithEmailAndPassword(auth, email, password)
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
      <Image width="50" height="50" src={"/GuildsLogoGrey.svg"} />
      <Typography fontWeight="600" variant="h4">
        Create an account
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        Start your 30-days trial.
      </Typography>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          remember: false,
        }}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ handleSubmit, handleChange, values }: FormikProps<FormValues>) => (
          <Form onSubmit={handleSubmit}>
            <Stack spacing={2} sx={{ width: "25rem" }}>
              <Stack>
                <Typography variant="body1">Email*</Typography>
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
                <Typography variant="body1">Password*</Typography>
                <TextField
                  onChange={handleChange}
                  value={values.password}
                  size="small"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                />
              </Stack>
              <Stack>
                <Typography variant="body1">Password*</Typography>
                <TextField
                  onChange={handleChange}
                  value={values.confirmPassword}
                  size="small"
                  type="password"
                  name="confirmPassword"
                  placeholder="••••••••"
                />
              </Stack>
              <Stack>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  Must be at least 8 charakters
                </Typography>
              </Stack>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  textTransform: "none",
                  height: "2.8rem",
                }}
              >
                Get started
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Stack>
  )
}
