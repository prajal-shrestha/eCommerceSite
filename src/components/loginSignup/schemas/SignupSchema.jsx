import * as yup from "yup";

// schema for SignUp
export const signUpSchema = yup.object().shape({
  firstName: yup.string().min(5).required("Required"),
  lastName: yup.string().required(),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup.string().min(8).required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  dob: yup
    .date()
    .required("Date of Birth is required")
    .max(new Date(), "Date of Birth cannot be in the future"),
  gender: yup
    .string()
    .required("Gender is required")
    .oneOf(["male", "female", "other"], "Invalid gender selection"),
});
