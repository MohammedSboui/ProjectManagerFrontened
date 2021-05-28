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
    width: "100%",
    margin: "1rem",
    paddingTop: "2rem",
  },
  info: {
    textAlign: "center",
    marginLeft: "5rem",
    marginBottom: "5rem",
    color: "red",
  },
}));
function Log(props) {
  const [error, Seterror] = useState("");
  const classes = useStyles();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  }
  const submit = async () => {
    try {
      const result = await axios.post(
        "https://localhost:44314/api/Utilisateurs/Login",
        form
      );
      console.log(result);
      localStorage.setItem("USERID", result.data);
      props.history.push("/home");
    } catch (err) {
      Seterror("password or email is wrong or invalid!");
      console.log(err);
    }
  };
  return (
    <Zoom in={true}>
      <div className={classes.root}>
        <Card>
          <Image
            src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.15752-9/188792798_808295299801304_659048569225669948_n.png?_nc_cat=107&ccb=1-3&_nc_sid=ae9488&_nc_ohc=XuRC7Z5-yAkAX-XN1R5&_nc_ht=scontent.ftun2-1.fna&oh=b33fe991e53ef64c01681ac7189cfbb9&oe=60CDAF1B"
            wrapped
            ui={false}
          />
          <Card.Content>
            <div>
              <Form>
                <Form.Field>
                  <label>Username</label>
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

                <Button
                  background-color="black "
                  style={{ width: "100%" }}
                  primary
                  onClick={submit}
                >
                  Login
                </Button>
              </Form>
            </div>
          </Card.Content>
        </Card>
        <span className={classes.info}>{error}</span>
        <p style={{ color: "black" }}>
          Don't have an account ? <Link to="/register">Register!</Link>
        </p>
      </div>
    </Zoom>
  );
}

export const Login = withRouter(Log);
