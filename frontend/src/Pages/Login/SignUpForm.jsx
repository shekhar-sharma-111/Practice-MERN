import React from 'react';
import './Login.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUpForm = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().required('Confirm Password is required'),
  });

  return (
    <div className='login'>
    <div className="form">
      <h1 className="text-center mb-5">Sign Up </h1>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          // Handle form submission here
          alert(JSON.stringify(values));
          //or console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                type="email"
                className={`form-control ${errors.email && touched.email? 'is-invalid' : ''}`}
              />
              <ErrorMessage name="email" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                type="password"
                className={`form-control ${errors.password && touched.password? 'is-invalid' : ''}`}
              />
              <ErrorMessage name="password" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                name="confirmPassword"
                type="password"
                className={`form-control ${errors.confirmPassword && touched.confirmPassword? 'is-invalid' : ''}`}
              />
              <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
            <br />
            <br />
            <Link to="/login" className="btn btn-link">
              Sign In
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

export default SignUpForm;