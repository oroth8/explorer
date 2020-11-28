const router = require("express").Router();
const questionController = require("../../controllers/questionController");

router.route("/").get(questionController.getQuestions);

module.exports = router;
