const router = require("express").Router();
<<<<<<< HEAD
const Location = require("../../models/location.js");




router.get("/location/:location", (req,res)=>{
    Location.find({ name: req.params.location})
    .then( results => res.json(results));
});





=======
const genericRoutes = require("./generic");
const characterRoute = require("./character");
const shipRoute = require("./ship");
// generic routes
router.use("/generic", genericRoutes);
router.use("/character", characterRoute)
router.use("/ship", shipRoute)
>>>>>>> main
module.exports = router;
