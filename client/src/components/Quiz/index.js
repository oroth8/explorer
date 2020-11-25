import React, { useState } from "react";

function Quiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

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

  return (
    <div className="quiz-section container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}!
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="q-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="q-text">
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
