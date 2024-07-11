import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStore2 } from "../../Component/Zustand";
import axios from "axios";

const LoginSignUpForm = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const { setUser, removeUser } = useStore2();
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="form">
        <h1 className="text-center mb-5">Login</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            // Handle form submission here
            actions.setSubmitting(false);
            console.log(values);
             axios
              .post("http://localhost:5500/users/login", values)
              .then(function (response) {
                response.statusText == 'OK'
                  &&(navigate("/login"),
                    console.table(response.data),
                    setUser(response.data))
                  response.status!=200&&(
                    console.table(response));
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  name="email"
                  type="email"
                  className={`form-control ${
                    errors.email && touched.email ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  type="password"
                  className={`form-control ${
                    errors.password && touched.password ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <button type="submit" className="btn btn-primary mt-3">
                Sign In
              </button>

              <br />
              <br />
              <Link to="/signup" className="btn btn-link">
                Sign Up
              </Link>
              <br />
              <Link to="/forgotpassword" className="btn btn-link">
                Forgot Password
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginSignUpForm;
