import React, { useState } from "react";
import axios from "axios";
import { Button, Container, Form, Input } from "semantic-ui-react";

export const Login = () => {
  const [error, Seterror] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });

    console.log(form);
  };
  const submit = async () => {
    try {
      const result = await axios.post(
        "https://localhost:44314/api/Utilisateurs/Login",
        form
      );
      console.log(result);
      localStorage.setItem("USERID", result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Form>
        <Form.Field>
          <label>Email</label>
          <Input placeholder="email" name="email" onChange={handleChange} />
          <label>Password</label>
          <Input
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
        </Form.Field>
        <Button onClick={submit} color="primary">
          Login
        </Button>
      </Form>
    </Container>
  );
};
