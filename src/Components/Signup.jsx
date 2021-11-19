import React from "react";
import { Formik, Form } from "formik";
import Textfield from "./Textfield";
import * as Yup from "yup";
const Signup = () => {
  const validate = Yup.object({
    firstname: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastname: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("email is required"),
    password: Yup.string()
      .min("Password Must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password"), null],
        "Password Must be at least 6 characters"
      )
      .required("Password is required"),
  });

  return (
    
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
      {formik=>(
          <div>
              <h1>Signup</h1>
              <Form>
<Textfield label="firstname" name="firstname" type="text" />
<Textfield label="lastname" name="lastname" type="text" />
<Textfield label="email" name="email" type="email" />
<Textfield label="password" name="password" type="password" />
<Textfield label="confirmPassword" name="confirmPassword" type="password" />
<button className="" type="submit">Register</button>
<button className="" type="reset">Reset</button>

              </Form>
          </div>
      )}
    </Formik>
  );
};

export default Signup;
