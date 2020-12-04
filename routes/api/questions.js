const router = require("express").Router();
const questionController = require("../../controllers/questionController");

router.route("/").get(questionController.getQuestions);
router.route("/category").get(questionController.getCategories);

module.exports = router;
