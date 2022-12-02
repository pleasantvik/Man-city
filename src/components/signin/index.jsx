import { useNavigate } from "react-router-dom";
// import app from "../../firebase";
// import { Auth } from "firebase/auth";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../firebase";
import { CircularProgress } from "@mui/material";
import { useFormik } from "formik";
import classes from "./signin.module.css";
import { useState } from "react";
import { schema } from "../validation/schema";

import { showErrorToast, showSuccessToast } from "../utils/utils";
export const Signin = () => {
  //STATE
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth(app);

  // FUNCTION THAT AUTHENTICATE THE USER
  const submitForm = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;

        console.log(userCredential);
        showSuccessToast("Log in successful");
        navigate("/dashboard");

        // ...
      })
      .catch((error) => {
        setLoading(false);

        const errorCode = error.code;
        const errorMessage = error.message;

        showErrorToast(errorMessage);
      });
  };

  const formik = useFormik({
    initialValues: {
      email: "test@test.com",
      password: "test1234",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
      setLoading(true);
      submitForm(values);
    },
  });

  return (
    <div className={classes.sign_container}>
      <div className={classes.signin_wrapper}>
        <form onSubmit={formik.handleSubmit}>
          <h2>Please login</h2>
          <div className={classes.form_group}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>

          {formik.touched.email && formik.errors.email ? (
            <div className={classes.error_label}>{formik.errors.email}</div>
          ) : (
            ""
          )}
          <div className={classes.form_group}>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>

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
