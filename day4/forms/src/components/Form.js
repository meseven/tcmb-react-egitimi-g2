import React, { useState } from "react";

function Form() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name || form.name.length < 3) {
      return false;
    }

    if (!form.email) {
      return false;
    }

    if (!form.message || form.message.length > 10 || form.message.length < 3) {
      return false;
    }

    console.log({ name: form.name, email: form.email, message: form.message });
  };

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="contact-form">
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" value={form.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input name="email" value={form.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
