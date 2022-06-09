import React from "react";
import { Formik } from "formik";
import validationSchema from "./validations";

function FormWithFormik() {
  return (
    <div className="contact-form">
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={async (values, bag) => {
          await new Promise((r) => setTimeout(r, 1000));

          console.log(values);
          bag.resetForm();
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                name="name"
                value={values.name}
                onChange={handleChange("name")}
                onBlur={handleBlur("name")}
                disabled={isSubmitting}
              />
              {errors.name && touched.name && (
                <div className="error">{errors.name}</div>
              )}
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input
                name="email"
                value={values.email}
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                disabled={isSubmitting}
              />
              {errors.email && touched.email && (
                <div className="error">{errors.email}</div>
              )}
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange("message")}
                onBlur={handleBlur("message")}
                disabled={isSubmitting}
              />
              {errors.message && touched.message && (
                <div className="error">{errors.message}</div>
              )}
            </div>
            <div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default FormWithFormik;
