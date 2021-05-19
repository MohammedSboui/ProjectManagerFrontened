import DeleteIcon from "@material-ui/icons/Delete";
import ForwardIcon from "@material-ui/icons/Forward";
import Fab from "@material-ui/core/Fab";
import axios from "axios";
import React from "react";
import { withRouter } from "react-router";
const Projec = (props) => {
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    const idUser = localStorage.getItem("USERID");
    axios
      .get(`https://localhost:44314/api/Utilisateurs/${idUser}`)
      .then((e) => setUser(e.data));
  }, []);
  const showproject = () => {
    props.history.push(`/project/${props.id}`);
  };
  return (
    <div className="project">
      <h1>{props.name}</h1>
      <p>{props.description}</p>

      <Fab onClick={showproject}>
        <ForwardIcon />
      </Fab>
      {user.role === "admin" && (
        <Fab onClick={() => {}}>
          <DeleteIcon />
        </Fab>
      )}
    </div>
  );
};

export const Project = withRouter(Projec);
