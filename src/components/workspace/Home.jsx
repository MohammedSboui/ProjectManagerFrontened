import axios from "axios";
import React from "react";
import { Header } from "./Header";
export const Home = () => {
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    const idUser = localStorage.getItem("USERID");
    axios
      .get(`https://localhost:44314/api/Utilisateurs/${idUser}`)
      .then((e) => setUser(e.data));
  }, []);
  console.log(user);
  return (
    <div>
      <Header />
      {user.role} !!!
    </div>
  );
};
