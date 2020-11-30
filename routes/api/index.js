const router = require("express").Router();
const genericRoutes = require("./generic");
const characterRoute = require("./character");
const questionsRoute = require("./questions");
const shipRoute = require("./ship");

// generic routes
router.use("/generic", genericRoutes);
router.use("/character", characterRoute);
router.use("/questions", questionsRoute);
router.use("/ship", shipRoute)


module.exports = router;
