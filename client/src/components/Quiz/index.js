import React, { useEffect, useState } from "react";
import {getQuizQuestions} from "../utils/API";
const questions = require("../../NAquestions.json");




function Quiz(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [quizQuestions, setQuestions] = useState([])
  let questionArr = [];

  const getQuestions = () => {
    getQuizQuestions().then(function(response) {
      questionArr = response.data;
      setQuestions(questionArr);
    })
  }

  useEffect(() => {
    getQuestions();
  }, [])

  console.log(quizQuestions);

  const handleUserAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const [displayOptions, setDisplayOptions]=useState({
    position: "fixed",
    top: "10%",
    left: "10%",
    maxWidth: "80%",
    zIndex: "2",
    display: "block"
  });



    useEffect(()=>{
    if(props.displayed.display==="Quiz"){
      setDisplayOptions({...displayOptions, display: "block"});
    }else{
      setDisplayOptions({...displayOptions, display: "none"});
    };


  },[props.displayed]);






  return (
    <div className="quiz-section container" style={displayOptions}>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {quizQuestions.length}!
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="q-count">
              <span>Question {currentQuestion + 1}</span>/{quizQuestions.length}
            </div>
            <div className="q-text">
              {console.log(quizQuestions[currentQuestion])}
              {questions[currentQuestion].questionText}
            </div>
            <img src={questions[currentQuestion].questionImg} />
          </div>
          <div className="ans-section">
            {questions[currentQuestion].answerChoices.map((answerOption) => (
              <button onClick={() => handleUserAnswer(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
