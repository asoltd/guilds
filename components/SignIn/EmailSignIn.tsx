import Image from "next/image"
import { Button, TextField, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { useAuth } from "reactfire"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { Form, Formik } from "formik"

export function EmailSignIn() {
  const auth = useAuth()

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
        onSubmit={(values) => onSubmit(values)}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <Stack>
                <Typography variant="body1">Email</Typography>
                <TextField
                  size="small"
                  sx={{ width: "22rem" }}
                  type="text"
                  name="email"
                  label="Email"
                />
              </Stack>
              <Stack>
                <Typography variant="body1">Password</Typography>
                <TextField
                  size="small"
                  sx={{ width: "22rem" }}
                  type="password"
                  name="password"
                  label="Password"
                />
              </Stack>
              <Button
                variant="contained"
                type="submit"
                sx={{ textTransform: "none" }}
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
