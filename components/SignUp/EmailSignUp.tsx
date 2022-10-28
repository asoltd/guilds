import Image from "next/image"
import * as Yup from "yup"
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material"
import { Stack } from "@mui/system"
import { useAuth } from "reactfire"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { Form, Formik, FormikProps } from "formik"
import { useState } from "react"
import { Visibility, VisibilityOff } from "@mui/icons-material"

interface FormValues {
  email: string
  password: string
  confirmPassword: string
  remember: boolean
}

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(20, "Too Long!")
    .required("Password required")
    .matches(/(?=.*[0-9])/, "Password must contain a number.")
    .matches(/(?=.*[a-z])/, "Password must contain a lowercase letter.")
    .matches(/(?=.*[A-Z])/, "Password must contain a uppercase letter.")
    .matches(/(?=.*[!@#$%^&*])/, "Password must contain a special character."),
  confirmPassword: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Password required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  email: Yup.string().email("Invalid email").required("Email required"),
})

export function EmailSignUp() {
  const [showPassword, setShowPassword] = useState(false)
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
        validationSchema={SignupSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          errors,
          touched,
        }: FormikProps<FormValues>) => (
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
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </Stack>
              <Stack>
                <Typography variant="body1">Password*</Typography>
                <TextField
                  onChange={handleChange}
                  value={values.password}
                  size="small"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
              </Stack>
              <Stack>
                <Typography variant="body1">Password*</Typography>
                <TextField
                  onChange={handleChange}
                  value={values.confirmPassword}
                  size="small"
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="••••••••"
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div>{errors.confirmPassword}</div>
                ) : null}
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
