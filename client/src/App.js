import React, { useState } from "react";
// import BackgroundImage from "./components/BackgroundImage";
import Level from "./components/Level";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Character components
import CharacterCreator from "./components/Character/CharacterCreate";
import ViewCharacter from "./components/Character/ViewCharacter";
// Ship Components
// import BuyShip from "./components/Ship/BuyShip";
// Pages
import Landing from "./pages/Landing";
import Play from "./components/Play";

// Quiz Components
import Quiz from "./components/Quiz";
// Character Context
import { CharProvider } from "./context/character/CharacterContext";

// Auth context states
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";
// import PrivateRoute from "./components/routing/PrivateRoute";

// auth components
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alerts";

// Global Style
import GlobalStyle from "./components/GlobalStyle";

// Put login token in local storage
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

// Our main background output

// Questions
const NAquestions = require("./NAquestions.json");

function App() {
  const [characterState, setCharacter] = useState({
    name: "default",
    characterImage: "",
  });

  // Send data to EmployeeList to be rendered, then renders final results.
  return (
    <div className="App">
      <GlobalStyle />
      <AuthState>
        <AlertState>
          <CharProvider>
            <Router>
              <Alert />
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/play" component={Play} />
                <Route exact path="/level" component={Level} />
                <Route exact path="/register" component={Register} />
                <Route
                  exact
                  path="/characterCreation"
                  component={CharacterCreator}
                />
                <Route exact path="/viewCharacter" component={ViewCharacter} />
                <Route exact path="/login" component={Login} />
                <Route exacth path="/na">
                  <Quiz questions={NAquestions} />
                </Route>
              </Switch>
            </Router>
          </CharProvider>
        </AlertState>
      </AuthState>
    </div>
  );
}

export default App;
