const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  level: { type: String },
  questionText: { type: String },
  answerChoices: [{ answerText: String, isCorrect: Boolean }],
  questionImg: { type: String },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
