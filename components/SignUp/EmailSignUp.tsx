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
} from "@mui/material"
import { Stack } from "@mui/system"
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth"
import { Form, Formik, FormikProps } from "formik"
import { SyntheticEvent, useState } from "react"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { useAuth } from "reactfire"
import { validationSchemas } from "./ValidationSchemas"

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

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
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
    </div>
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
  const auth = useAuth()

  const SignupSchema = Yup.object().shape(validationSchemas[selectedTab])

  const handleSubmit = (values: FormValues) => {
    const { email, password } = values
    console.log("values", values)
    if (selectedTab === 0) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          alert("Logged in as:" + userCredential.user.email)
        })
        .catch((error) => {
          alert("Error:" + error.message)
        })
        .then(() => {
          sendEmailVerification(auth.currentUser).then(() => {
            alert("Email verification sent!")
          })
        })
    } else {
      alert("Not implemented yet!")
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
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        Start your 30-days trial.
      </Typography>
      <Box width="100%">
        <Tabs
          variant="fullWidth"
          value={selectedTab}
          onChange={handleTabsChange}
          sx={{ border: "10px" }}
        >
          <Tab
            label="Email"
            {...a11yProps(0)}
            sx={{ textTransform: "none" }}
          ></Tab>
          <Tab
            label="Phone"
            {...a11yProps(1)}
            sx={{ textTransform: "none" }}
          ></Tab>
        </Tabs>
      </Box>
      <Formik
        initialValues={{
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          remember: false,
          name: "",
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
                    onChange={(e) => setFieldValue("phone", e)}
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
