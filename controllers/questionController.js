const db = require("../models");

module.exports = {
  getQuestions: function (req, res) {
    db.Question.find({})
      .then((questions) => res.json(questions))
      .catch((error) => res.status(422).json(error));
  },
  getCategories: function (req, res) {
    db.Question.aggregate([
      {$group: {_id: "$level", map: {$first: "$map"}}},
      {$sort: {_id: 1}}
    ]).then((categories) => res.json(categories))
      .catch((error) => res.status(422).json(error));
  }
};
