import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Container } from "semantic-ui-react";

export const Register = () => {
  const [error, Seterror] = useState("");
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    role: "user",
    password: "",
    sexe: "",
    etat: "",
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
    await axios.post("https://localhost:44314/api/Utilisateur/Register", form);
  };
  return (
    <Container>
      <Form>
        <Form.Field>
          <label>Nom</label>
          <Input placeholder="Nom" name="nom" onChange={handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Prenom</label>
          <Input placeholder="prenom" name="prenom" onChange={handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Input placeholder="email" name="email" onChange={handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Role</label>
          <Input placeholder="role" name="role" onChange={handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>EtatCivil</label>
          <Input placeholder="etat" name="etat" onChange={handleChange} />
        </Form.Field>
        <Button onClick={submit} color="primary">
          Register
        </Button>
      </Form>
    </Container>
  );
};
