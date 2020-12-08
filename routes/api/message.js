const router = require("express").Router();
const Message = require("../../models/message.js");


router.post("/add", (req,res)=>{
    Message.create(req.body).then(results => res.json(results));
});

router.get("/get", (req,res)=>{
    Message.find({}).sort({ "date": -1}).limit(25)
    .then( results => res.json(results));
});





module.exports = router;
