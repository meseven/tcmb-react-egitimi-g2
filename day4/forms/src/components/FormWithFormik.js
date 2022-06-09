import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validations";

function FormWithFormik() {
  const {
    handleSubmit,
    values,
    handleBlur,
    handleChange,
    touched,
    errors,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 1000));
      console.log(values);
      bag.resetForm();
    },
    validationSchema,
  });

  return (
    <div className="contact-form">
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
    </div>
  );
}

export default FormWithFormik;
