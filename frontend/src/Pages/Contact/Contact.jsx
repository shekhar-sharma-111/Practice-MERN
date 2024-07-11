import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css'
const Contact = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
  });

  return (<div className="contact">
    <div className="form">
      <h1 className="text-center mb-5">Contact Form</h1>
      <Formik
        initialValues={{ name: '', email: '', phone: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          alert(`Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}`);
          actions.resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field
                name="name"
                type="text"
                className={`form-control ${errors.name && touched.name? 'is-invalid' : ''}`}
              />
              <ErrorMessage name="name" component="div" className="invalid-feedback" />
            </div>
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
              <label htmlFor="phone">Phone</label>
              <Field
                name="phone"
                type="tel"
                className={`form-control ${errors.phone && touched.phone? 'is-invalid' : ''}`}
              />
              <ErrorMessage name="phone" component="div" className="invalid-feedback" />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
    </div>
  );
};

export default Contact;