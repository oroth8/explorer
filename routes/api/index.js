const router = require("express").Router();
const genericRoutes = require("./generic");
const characterRoute = require("./character");
const shipRoute = require("./ship");
const locationRoute=require("./location")
// generic routes
router.use("/generic", genericRoutes);
router.use("/character", characterRoute);
router.use("/ship", shipRoute);
router.use("/location", locationRoute);
module.exports = router;
