const router = require("express").Router();
const shipController = require("../../controllers/shipController");



router.route("/loadAll")
    .get(shipController.loadAll);


module.exports = router;