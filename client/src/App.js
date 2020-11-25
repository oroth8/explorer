import React from "react";
import BackgroundImage from "./components/BackgroundImage";
import Level from "./components/Level";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CharacterCreator from "./components/Character/CharacterCreator"
// Auth context states
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";

// auth components
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alerts";

// Put login token in local storage
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

// Our main background output

function App() {
  // Send data to EmployeeList to be rendered, then renders final results.
  return (
    <AuthState>
      <AlertState>
        <Router>
          <Alert />
          <Switch>
            <Route exact path="/" component={Level} />
            <Route exact path="/level" component={Level} />
            <Route exact path="/register" component={Register} />
            
            <Route exact path="/characterCreation" component={CharacterCreator} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
