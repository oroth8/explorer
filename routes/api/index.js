const router = require("express").Router();
const genericRoutes = require("./generic");
const characterRoute = require("./character");
// generic routes
router.use("/generic", genericRoutes);
router.use("/character", characterRoute)
module.exports = router;
