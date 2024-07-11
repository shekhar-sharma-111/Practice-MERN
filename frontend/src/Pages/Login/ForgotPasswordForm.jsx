import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
// import Login from './Login'
const ForgotPasswordForm = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });

  return ( <div className="login">
    <div className="form">
      <h1 className="text-center mb-5">Password Recovery</h1>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          // Handle form submission here
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                type="email"
                placeholder="abc@gmail.com"
                className={`form-control ${errors.email && touched.email? 'is-invalid' : ''}`}
              />
              <ErrorMessage name="email" component="div" className="invalid-feedback"  />
            </div>
            <br /><br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <br />
            <br />
            <br />
            <Link to="/login" className="btn btn-link">
              Sign In
            </Link>
            <br />
            <Link to="/login" className="btn btn-link">
              Return to Login
            </Link>
          </Form>
        )}
      </Formik>
    </div>
    </div>
  );
};

export default ForgotPasswordForm;