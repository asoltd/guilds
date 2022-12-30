import Image from "next/image"
import * as Yup from "yup"
import MuiPhoneNumber from "material-ui-phone-number"
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Typography,
  Stack,
} from "@mui/material"
import {
  ConfirmationResult,
  createUserWithEmailAndPassword,
  getAuth,
  RecaptchaVerifier,
  sendEmailVerification,
  signInWithPhoneNumber,
} from "firebase/auth"
import { Form, Formik, FormikProps } from "formik"
import { SyntheticEvent, useState } from "react"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { validationSchemas } from "./ValidationSchemas"
import { useRouter } from "next/router"

interface FormValues {
  email: string
  phone: string
  password: string
  confirmPassword: string
  remember: boolean
  name: string
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier
    confirmationResult: ConfirmationResult
  }
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

export function EmailSignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [selectedTab, setSelectedTab] = useState(0)
  const auth = getAuth()
  const router = useRouter()

  const SignupSchema = Yup.object().shape(validationSchemas[selectedTab])

  const signInWithEmail = async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    await sendEmailVerification(userCredential.user)
  }

  const setUpRecaptcha = (phone: string) => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "large",
        callback: (response: string) => {
          onSignInSubmit(phone)
        },
      },
      auth
    )
  }

  const onSignInSubmit = async (phone: string) => {
    setUpRecaptcha(phone)
    const phoneNumber = phone
    const appVerifier = window.recaptchaVerifier
    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      appVerifier
    )
    window.confirmationResult = confirmationResult
    const code = window.prompt("Enter OTP", "")
    const result = await confirmationResult.confirm(code)
  }

  const handleSubmit = async (values: FormValues) => {
    const { email, password, phone } = values
    if (selectedTab === 0) {
      await signInWithEmail(email, password)
      router.push("/")
    } else {
      await onSignInSubmit(phone)
      router.push("/")
    }
  }

  const handleTabsChange = (event: SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue)
  }

  return (
    <Stack
      alignItems="center"
      justifyContent="space-around"
      spacing={3}
      width="100%"
    >
      <Image width={50} height={50} src="/GuildsLogo2.svg" alt="Guilds logo" />
      <Typography fontWeight="600" variant="h4">
        Create an account
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Start your 30-day s trial.
      </Typography>
      <Box width="100%">
        <Tabs
          variant="fullWidth"
          value={selectedTab}
          onChange={handleTabsChange}
        >
          <Tab label="Email" {...a11yProps(0)} sx={{ textTransform: "none" }} />
          <Tab label="Phone" {...a11yProps(1)} sx={{ textTransform: "none" }} />
        </Tabs>
      </Box>
      <Formik
        initialValues={{
          email: "",
          phone: "+48696969696",
          password: "Qweerty123!",
          confirmPassword: "Qweerty123!",
          remember: false,
          name: "Jakub Frąckowiak",
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
          setFieldValue,
        }: FormikProps<FormValues>) => (
          <Form onSubmit={handleSubmit}>
            <Stack spacing={2} width="25rem">
              <Stack>
                <Typography variant="body1">Name*</Typography>
                <TextField
                  onChange={handleChange}
                  value={values.name}
                  size="small"
                  name="name"
                  placeholder="Enter your name"
                />
                {errors.name && touched.name ? (
                  <Typography color="#ff0000">{errors.name}</Typography>
                ) : null}
              </Stack>
              <TabPanel value={selectedTab} index={0}>
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
                    <Typography color="#ff0000">{errors.email}</Typography>
                  ) : null}
                </Stack>
              </TabPanel>
              <TabPanel value={selectedTab} index={1}>
                <Stack>
                  <Typography variant="body1">Phone*</Typography>
                  <MuiPhoneNumber
                    required
                    variant="outlined"
                    onChange={(e: unknown) => setFieldValue("phone", e)}
                    value={values.phone}
                    type="phone"
                    name="phone"
                    defaultCountry="us"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        width: "100%",
                        backgroundColor: "background.default",
                      },
                      "& .MuiOutlinedInput-input": {
                        padding: "0.5rem 1rem",
                      },
                    }}
                  />
                  {errors.phone && touched.phone ? (
                    <Typography color="#ff0000">{errors.phone}</Typography>
                  ) : null}
                </Stack>
              </TabPanel>
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
                      <InputAdornment position="end">
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
                  <Typography color="#ff0000">{errors.password}</Typography>
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
                  <Typography color="#ff0000">
                    {errors.confirmPassword}
                  </Typography>
                ) : null}
              </Stack>
              <Stack>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  Must be at least 8 characters
                </Typography>
              </Stack>
              <Button
                className="sign-in-button"
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
      <div id="recaptcha-container" />
    </Stack>
  )
}