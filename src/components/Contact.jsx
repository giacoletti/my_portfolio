import React, { useState } from "react";
import { Container, Form, Input, Button, TextArea } from "semantic-ui-react";

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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} netlify name="contact">
      <input type="hidden" name="form-name" value="contact" />
        <Form.Field inline>
          <label data-cy="name-label">Your Name:</label>
          <Input data-cy="name-input" name="name" onChange={handleChange}/>
        </Form.Field>
        <Form.Field inline>
          <label data-cy="email-label">Your Email:&nbsp;</label>
          <Input data-cy="email-input" type="email" name="email" onChange={handleChange}/>
        </Form.Field>
        <Form.Field width={8}>
          <label data-cy="message-label">Message:</label>
          <TextArea data-cy="message-textarea" name="message" onChange={handleChange}/>
        </Form.Field>
        <Button data-cy="submit-button" type="submit">Send</Button>
      </Form>
    </Container>
  );
};

export default Contact;
