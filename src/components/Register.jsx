import React, { useState } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core/styles";
import { Input, Button, Form } from "semantic-ui-react";
import Zoom from "@material-ui/core/Zoom";
import axios from "axios";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    paddingTop: "7%",
    paddingLeft: "40%",
    color: "White",
  },
  centrify: {
    textAlign: "center",
    width: "100%",
    margin: "1rem",
    paddingTop: "2rem",
    color: "red",
  },
  info: {
    textAlign: "center",
    marginLeft: "5rem",
    marginBottom: "5rem",
    color: "red",
  },
}));
function Regis(props) {
  const classes = useStyles();
  const [error, Seterror] = useState("");
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    role: "user",
    password: "",
    sexe: "not given",
    EtatCivil: "",
  });

  function ValidateEmail(mail) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail
      )
    ) {
      return true;
    }
    return false;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
    console.log(form);
  }
  async function submit() {
    for (const x in form) {
      if (form[x].length === 0) {
        Seterror("Please fill all the inputs :)");
        return;
      }
    }

    if (!ValidateEmail(form.email)) {
      Seterror("Please give a valid email.");
      return;
    }
    try {
      const result = await axios.post(
        "https://localhost:44314/api/Utilisateurs/Register",
        form
      );
      props.history.push("/login");
    } catch (err) {
      Seterror("an error occured while registring the user.");
    }
  }

  return (
    <Zoom in={true}>
      <div className={classes.root}>
        <Card>
          <Image
            src="https://t3.ftcdn.net/jpg/00/66/46/84/240_F_66468442_ds3s8OPIgA6IJ2bGUUocEIG3cGcyopaI.jpg"
            wrapped
            ui={false}
          />
          <Card.Content>
            <div>
              <Form>
                <Form.Field>
                  <label>Nom</label>
                  <Input
                    icon={{ name: "user", circular: true, link: true }}
                    name="nom"
                    onChange={handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Prenom</label>
                  <Input
                    icon={{ name: "user", circular: true, link: true }}
                    name="prenom"
                    onChange={handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Etat civil</label>
                  <Input
                    icon={{ name: "user", circular: true, link: true }}
                    name="EtatCivil"
                    onChange={handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <Input
                    icon={{ name: "user", circular: true, link: true }}
                    name="email"
                    onChange={handleChange}
                  />
                </Form.Field>

                <Form.Field>
                  <label>Password</label>
                  <Input
                    type="password"
                    icon={{ name: "user secret", circular: true, link: true }}
                    name="password"
                    onChange={handleChange}
                  />
                </Form.Field>

                <Button style={{ width: "100%" }} primary onClick={submit}>
                  Register
                </Button>
              </Form>
            </div>
          </Card.Content>
        </Card>
        <span className={classes.info}>{error}</span>
        <p style={{ color: "black" }}>
          have an account ? <Link to="/login">Login!</Link>
        </p>
        <br></br>
        <br></br>
      </div>
    </Zoom>
  );
}

export const Register = withRouter(Regis);
