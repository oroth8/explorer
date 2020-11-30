const router = require("express").Router();
const characterController = require("../../controllers/characterController");



router.route("/load/:id")
    .get(characterController.load);

router.route("/create")
    .post(characterController.create);


module.exports = router;