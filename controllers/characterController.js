const db = require('../models/Character');

module.exports = {    
    // Many thanks to Paul and to:
    // https://stackoverflow.com/questions/17244363/mongoose-findoneandupdate-upsert-id-null  

    // When the user creates a new character, the API calls this function. findOneAndUpdate,
    // with the upsert keyword. If we have passed in a chracter _id, the it will find that 
    // document in the database and update it. If we have not passed in an id, it will 
    // create a new document instead.
    create: function(req, res) {
        db.findOneAndUpdate({userId:req.body.userId}, req.body, {new:true, upsert:true})
            .then((data)=>{                        
                res.json(data)
            }) 
            .catch(err=>{
                console.error("Erorr in CharacterController, findOneAndUpdate:"+err);
                res.status(500).json({ msg: err });                    
            })
        },
        // Return the document with a userId matching the passed id.
    load: function(req, res){        
        db.findOne({userId:req.params.id}, (err, data)=>{
            if(err) 
                res.status(500).json({ msg: err });             
            else res.json({data})
        })
    }
};


