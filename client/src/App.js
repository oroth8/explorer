import React, {useState} from "react";
import BackgroundImage from "./components/BackgroundImage";
import Level from "./components/Level";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CharacterCreator from "./components/Character/CharacterCreator"
import ViewCharacter from "./components/Character/ViewCharacter";
// Quiz Components
import Quiz from "./components/Quiz";
// Character Context 
import {CharProvider} from "./context/character/CharacterContext"
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

// Questions
const NAquestions = require("./NAquestions.json");

function App() {
  
const [characterState, setCharacter] = useState({name:"default"});

  function updateCharacter(charObj){
    setCharacter(charObj);
  }
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
            <CharProvider>
              <Route exact path="/viewCharacter" component={ViewCharacter} />
              <Route exact path="/characterCreation" component={CharacterCreator} />
            </CharProvider> 
            <Route exact path="/login" component={Login} />
            <Route exacth path="/na">
              <Quiz questions={NAquestions} />
            </Route>
          </Switch>
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
