import * as Yup from "yup"

const validationSchema = {
  password: Yup.string()
    .min(8, "Too Short!")
    .max(20, "Too Long!")
    .required("Password required!")
    .matches(/(?=.*[0-9])/, "Password must contain a number!")
    .matches(/(?=.*[a-z])/, "Password must contain a lowercase letter!")
    .matches(/(?=.*[A-Z])/, "Password must contain a uppercase letter!")
    .matches(/(?=.*[!@#$%^&*])/, "Password must contain a special character!"),
  confirmPassword: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Password required!")
    .oneOf([Yup.ref("password"), null], "Passwords must match!"),
  name: Yup.string().required("Name required!"),
}

export const validationSchemas = [
  {
    ...validationSchema,
    email: Yup.string().email("Invalid email!").required("Email required!"),
  },
  {
    ...validationSchema,
    phone: Yup.string().required("Phone number required!"),
  },
]
