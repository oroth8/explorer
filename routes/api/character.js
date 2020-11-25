const router = require("express").Router();
const characterController = require("../../controllers/characterController");

router.route("/saveCharacter")
    .post(characterController.create);

module.exports = router;