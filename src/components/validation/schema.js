import * as Yup from "yup";

// const phoneRegExp = /^([0]{1})[0-9]{10}$/

export const schema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("The email is required"),
  password: Yup.string()
    .required("The password is required")
    .min(5, "password should be greater than 5 character"),
});
