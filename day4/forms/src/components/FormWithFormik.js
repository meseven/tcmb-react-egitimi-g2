import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import validationSchema from "./validations";

const usernames = [
  "sedademir",
  "kadircanugur",
  "harunozcalik",
  "zeynepyildirim",
  "ardaguzererler",
];

function FormWithFormik() {
  const [username, setUsername] = useState("");
  const [suggestions, setSuggestions] = useState([]);

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
      await new Promise((r) => setTimeout(r, 1000)); // backend call

      if (values.email === "test@test.com") {
        return bag.setErrors({ email: "Bu email adresi zaten kullanımda." });
      }

      bag.resetForm();
    },
    validationSchema,
  });

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  useEffect(() => {
    const isValid = !usernames.includes(username);

    if (!isValid) {
      setSuggestions(generateRandomUsernames());
    }

    function generateRandomUsernames() {
      let numbers = [];
      for (let i = 0; i < 3; i++) {
        numbers.push(username + "." + Math.floor(Math.random() * 1000));
      }

      return numbers;
    }
  }, [username]);

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input value={username} onChange={handleUsernameChange} />
        </div>

        <div>
          {suggestions.map((item, i) => (
            <span
              className="suggestion"
              key={i}
              onClick={() => setUsername(item)}
            >
              {item}
            </span>
          ))}
        </div>

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
