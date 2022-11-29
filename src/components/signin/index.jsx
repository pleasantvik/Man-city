import { Navigate } from "react-router-dom";
import * as Yup from "yup";
import { CircularProgress } from "@mui/material";
import { useFormik } from "formik";
import classes from "./signin.module.css";
import { useState } from "react";

export const Signin = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("The email is required"),
      password: Yup.string()
        .required("The password is required")
        .min(5, "password should be greater than 5 character"),
    }),
    onSubmit: (values) => {
      console.log(values);
      setLoading(true);
    },
  });
  return (
    <div className={classes.sign_container}>
      <div className={classes.signin_wrapper}>
        <form onSubmit={formik.handleSubmit}>
          <h2>Please login</h2>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />

          {formik.touched.email && formik.errors.email ? (
            <div className={classes.error_label}>{formik.errors.email}</div>
          ) : (
            ""
          )}
          <input
            type="text"
            name="password"
            placeholder="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />

          {formik.touched.password && formik.errors.password ? (
            <div className={classes.error_label}>{formik.errors.password}</div>
          ) : (
            ""
          )}

          {loading && <CircularProgress className={classes.signin_progress} />}
          {!loading && <button type="submit">Login</button>}
        </form>
      </div>
    </div>
  );
};
