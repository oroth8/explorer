const router = require('express').Router();

const genericController = require("../../controllers/genericController");

// Matches with "/api/generic"
router.route("/")
  .get(genericController.genericTest)

module.exports = router;
