import React, { useState } from "react";
import { Container } from "semantic-ui-react";

const Contact = () => {

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
  };

  const handleChange = (e) => setForm({ [e.target.name]: e.target.value });

  return (
    <Container>
      <form onSubmit={handleSubmit} netlify name="contact">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name:
            <input type="text" name="name" value={form.name} onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your Email:
            <input type="email" name="email" value={form.email} onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message:
            <textarea name="message" value={form.message} onChange={handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Container>
  );
};

export default Contact;
