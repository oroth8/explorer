const router = require("express").Router();
const characterRoute = require("./character");
const questionsRoute = require("./questions");
const shipRoute = require("./ship");
const locationRoute=require("./location");
const messageRoute=require("./message");

// generic routes
router.use("/character", characterRoute);
router.use("/questions", questionsRoute);
router.use("/ship", shipRoute);
router.use("/location", locationRoute);
router.use("/message", messageRoute);


module.exports = router;
