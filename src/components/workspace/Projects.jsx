import axios from "axios";
import React from "react";
import { Header } from "./Header";
import { Project } from "./Project";
export const Projects = () => {
  const [projects, setProjects] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://localhost:44314/api/Projects")
      .then((e) => setProjects(e.data));
  }, []);
  console.log(projects);
  return (
    <div>
      <Header />
      {projects.map((e) => {
        return (
          <Project
            id={e.projectId}
            name={e.titre}
            description={e.description}
          />
        );
      })}
    </div>
  );
};
