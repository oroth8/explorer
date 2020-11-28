const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nasagame");

const questionSeed = [
  {
    level: "North America",
    questionText: "What is the largest city in North America?",
    answerChoices: [
      { answerText: "New York", isCorrect: false },
      { answerText: "Toronto", isCorrect: false },
      { answerText: "Los Angeles", isCorrect: false },
      { answerText: "Mexico City", isCorrect: true },
    ],
  },
  {
    level: "North America",
    questionText:
      "The tallest mountain in North America, Denali (pictured below), can be found in what US state?",
    answerChoices: [
      { answerText: "Colorado", isCorrect: false },
      { answerText: "Alaska", isCorrect: true },
      { answerText: "Washington", isCorrect: false },
      { answerText: "Montana", isCorrect: false },
    ],
    questionImg: "../img/denali.jpg",
  },
  {
    level: "North America",
    questionText: "What body of water borders North America to the West?",
    answerChoices: [
      { answerText: "Atlantic Ocean", isCorrect: false },
      { answerText: "Gulf of Mexico", isCorrect: false },
      { answerText: "Pacific Ocean", isCorrect: true },
      { AnswerText: "Indian Ocean", isCorrect: false },
    ],
    questionImg: "../img/NA.jpg",
  },
];

db.Question.remove({})
  .then(() => db.Question.collection.insertMany(questionSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
