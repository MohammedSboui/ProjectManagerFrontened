import { Register } from "./Register";
import { Login } from "./Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./workspace/Home";
import { Tasks } from "./workspace/Tasks";
import { Projects } from "./workspace/Projects";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route
            path="/home"
            component={localStorage.getItem("USERID") ? Home : Login}
          />
          <Route
            path="/projects"
            component={localStorage.getItem("USERID") ? Projects : Login}
          />
          <Route
            path="/project/:id"
            component={localStorage.getItem("USERID") ? Tasks : Login}
          />
          <Route
            path="/"
            component={localStorage.getItem("USERID") ? Home : Login}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
