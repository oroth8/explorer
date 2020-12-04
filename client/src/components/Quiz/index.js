// Dependencies
import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import CharacterContext from "../../context/character/CharacterContext";
import "./style.css"
import { Link } from "react-router-dom"
import GameNav from "../layout/GameNav"
import Footer from "../layout/Footer"

// Quiz Component
function Quiz({ questions }) {
  // Character & Authorization Context
  const characterContext = useContext(CharacterContext);
  const authContext = useContext(AuthContext);
  // Quiz States
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  let userId;

  // Load auth & user context on authContext.loading change. Loads user character based on authorization user id
  useEffect(() => {
    authContext.loadUser();

    if (authContext.user) {
      userId = authContext.user._id;
      characterContext.loadChar(userId);
    }
  }, [authContext.loading]);
  // Handles user answer choice, if correct, score is incremented, character credits are incremented through updateCredits function and finally the character is saved via saveChar function
  const handleUserAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      characterContext.updateCredits();
      characterContext.saveChar();
    }
    // Cycles through questions until last has been answered, then set score state to true to display score section
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  //Regex to add commas to number
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  // if no questions have loaded, display loading...
  if (questions.length === 0) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
    // if questions loaded, display below JSX
  } else if (questions.length > 0) {
    return (
      <React.Fragment>
        <div className="jumbotron jumbotron-fluid quiz-head">
          <div className="container">
            <h1>Earn Money!</h1>
            <span>Test your knowledge to earn credits!</span>
          </div>
        </div>
        <div className="quiz-section container-fluid">
          {showScore ? (
            <div className="score-section container">
              <div className="row">
                <p>
                  You scored {score} out of {questions.length}!
                </p>
              </div>
              <div className="row">
                <p>
                  Your correct answers earned you{" "}
                  {numberWithCommas(score * 1000000)} credits!
                </p>
              </div>
              <div className="row">
                <Link to="/earn" onClick={characterContext.saveChar}>
                  <button id="back">Back</button>
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="q-count">
                      <span>Question {currentQuestion + 1}</span>/
                      {questions.length}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="q-text">
                      {questions[currentQuestion].questionText}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <img
                      src={questions[currentQuestion].questionImg}
                      className="quizImg"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="ans-section">
                    <div className="row">
                      <div className="d-inline col-sm-12">
                        {questions[currentQuestion].answerChoices.map(
                          (answerOption) => (
                            <button
                              onClick={() =>
                                handleUserAnswer(answerOption.isCorrect)
                              }
                            >
                              {answerOption.answerText}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <Footer />

        <GameNav />
      </React.Fragment>
    );
  }
}

export default Quiz;
