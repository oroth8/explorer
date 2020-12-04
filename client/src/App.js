import React, { useEffect, useState } from "react";
// import BackgroundImage from "./components/BackgroundImage";
import Level from "./components/Level";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Character components
import CharacterCreate from "./components/Character/CharacterCreate";
import ViewCharacter from "./components/Character/ViewCharacter";
// Character Context
import CharacterState from "./context/character/CharacterState";
// Ship Components
// Pages
import Landing from "./pages/Landing";
import Play from "./components/Play";
import BuyShip from "./components/Ship/BuyShip";
import Instructions from "./components/Instructions";
import Chat from "./components/Chat";
// Quiz Components
import Quiz from "./components/Quiz";

// Auth context states
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";

// auth components
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alerts";

// Global Style
import GlobalStyle from "./components/GlobalStyle";
import { getQuizQuestions } from "./components/utils/API";
import Earn from "./components/Earn";

// Put login token in local storage
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const [quizQuestions, setQuizQuestions] = useState([
    {
      level: "",
      questionText: "",
      answerChoices: [{ answerText: "", isCorrect: false }],
      questionImg: "",
    },
  ]);

  const getQuiz = () => {
    getQuizQuestions().then(function (response) {
      setQuizQuestions(response.data);
    });
  };

  useEffect(() => {
    getQuiz();
  }, []);

  //Filter for respective level
  const naQuestions = quizQuestions.filter(
    (questions) => questions.level === "North America"
  );
  const saQuestions = quizQuestions.filter(
    (questions) => questions.level === "South America"
  );
  const euQuestions = quizQuestions.filter(
    (questions) => questions.level === "Europe"
  );
  const asQuestions = quizQuestions.filter(
    (questions) => questions.level === "Asia"
  );
  const afQuestions = quizQuestions.filter(
    (questions) => questions.level === "Africa"
  );
  const auQuestions = quizQuestions.filter(
    (questions) => questions.level === "Australia"
  );
  const anQuestions = quizQuestions.filter(
    (questions) => questions.level === "Antarctica"
  );
  const sunQuestions = quizQuestions.filter(
    (questions) => questions.level === "Sun"
  );
  const merQuestions = quizQuestions.filter(
    (questions) => questions.level === "Mercury"
  );
  const venQuestions = quizQuestions.filter(
    (questions) => questions.level === "Venus"
  );
  const earthQuestions = quizQuestions.filter(
    (questions) => questions.level === "Earth"
  );
  const marsQuestions = quizQuestions.filter(
    (questions) => questions.level === "Mars"
  );
  const jupQuestions = quizQuestions.filter(
    (questions) => questions.level === "Jupiter"
  );
  const satQuestions = quizQuestions.filter(
    (questions) => questions.level === "Saturn"
  );
  const urQuestions = quizQuestions.filter(
    (questions) => questions.level === "Uranus"
  );
  const nepQuestions = quizQuestions.filter(
    (questions) => questions.level === "Neptune"
  );

  return (
    <>
      <GlobalStyle />
      <AuthState>
        <AlertState>
          <CharacterState>
            <Router>
              <Alert />
              <Switch>
                {/* PUBLIC ROUTES */}
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/instructions" component={Instructions} />
                {/* PRIVATE ROUTES */}
                <PrivateRoute
                  exact
                  path="/play"
                  component={Play}
                  questions={quizQuestions}
                />
                <PrivateRoute exact path="/level" component={Level} />
                <PrivateRoute
                  exact
                  path="/characterCreation"
                  component={CharacterCreate}
                />
                <PrivateRoute
                  exact
                  path="/viewCharacter"
                  component={ViewCharacter}
                />
                <PrivateRoute exact path="/chat" component={Chat} />
                <PrivateRoute exact path="/ship" component={BuyShip} />
                <PrivateRoute
                  component={Earn}
                  questions={quizQuestions}
                  exact
                  path="/earn"
                />
                {/* QUIZ ROUTES */}
                <Route exact path="/naquiz">
                  <Quiz questions={naQuestions} />
                </Route>
                <Route exact path="/saquiz">
                  <Quiz questions={saQuestions} />
                </Route>
                <Route exact path="/euquiz">
                  <Quiz questions={euQuestions} />
                </Route>
                <Route exact path="/asquiz">
                  <Quiz questions={asQuestions} />
                </Route>
                <Route exact path="/afquiz">
                  <Quiz questions={afQuestions} />
                </Route>
                <Route exact path="/auquiz">
                  <Quiz questions={auQuestions} />
                </Route>
                <Route exact path="/anquiz">
                  <Quiz questions={anQuestions} />
                </Route>
                <Route exact path="/sunquiz">
                  <Quiz questions={sunQuestions} />
                </Route>
                <Route exact path="/merquiz">
                  <Quiz questions={merQuestions} />
                </Route>
                <Route exact path="/venquiz">
                  <Quiz questions={venQuestions} />
                </Route>
                <Route exact path="/marsquiz">
                  <Quiz questions={marsQuestions} />
                </Route>
                <Route exact path="/jupquiz">
                  <Quiz questions={jupQuestions} />
                </Route>
                <Route exact path="/satquiz">
                  <Quiz questions={satQuestions} />
                </Route>
                <Route exact path="/urquiz">
                  <Quiz questions={urQuestions} />
                </Route>
                <Route exact path="/nepquiz">
                  <Quiz questions={nepQuestions} />
                </Route>
                <Route exact path="/earthquiz">
                  <Quiz questions={earthQuestions} />
                </Route>
              </Switch>
            </Router>
          </CharacterState>
        </AlertState>
      </AuthState>
    </>
  );
}

export default App;
