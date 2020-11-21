const router = require("express").Router();
const genericRoutes = require("./generic");

// generic routes
router.use("/generic", genericRoutes);

module.exports = router;
