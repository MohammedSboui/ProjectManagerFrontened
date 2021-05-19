import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  btn: {
    marginLeft: 10,
    backgroundColor: "black",
  },
}));

function Heade(props) {
  const classes = useStyles();
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    const idUser = localStorage.getItem("USERID");
    axios
      .get(`https://localhost:44314/api/Utilisateurs/${idUser}`)
      .then((e) => setUser(e.data));
  }, []);
  function Handlelog(event) {
    localStorage.removeItem("USERID");
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#2E3B55" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Project Manager
          </Typography>

          <Button className={classes.btn} variant="contained">
            <Link to="/home" color="blue">
              Home
            </Link>
          </Button>
          {user.role === "admin" && (
            <Button className={classes.btn} variant="contained">
              <Link to="/add-project" color="blue">
                Add project
              </Link>
            </Button>
          )}

          {user.role === "user" && (
            <Button className={classes.btn} variant="contained">
              <Link to="/my-tasks" color="blue">
                My Tasks
              </Link>
            </Button>
          )}

          <Button className={classes.btn} variant="contained">
            <Link to="/projects" color="blue">
              Projects
            </Link>
          </Button>
          <Button className={classes.btn} variant="contained">
            <Link to="/login" color="red" onClick={Handlelog}>
              SIGN OUT
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export const Header = Heade;
