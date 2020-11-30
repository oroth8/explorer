const router = require("express").Router();
const Location = require("../../models/location.js");




router.get("/:location", (req,res)=>{
    Location.find({ name: req.params.location})
    .then( results => res.json(results));
});





module.exports = router;
