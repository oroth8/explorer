const db = require("../models");

module.exports = {
  getQuestions: function (req, res) {
    console.log(req);
    db.Question.find({ level: "North America" })
      .then((questions) => res.json(questions))
      .catch((error) => res.status(422).json(error));
  },
};
