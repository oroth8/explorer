const db = require('../models/Character');

// Export Controller Methods
module.exports = {
    create: function(req, res) {
        // console.log("Creating"+data);
        // Many thanks to Paul and to:
        // https://stackoverflow.com/questions/17244363/mongoose-findoneandupdate-upsert-id-null  
        db.findOneAndUpdate({userId:req.body.userId}, req.body, {new:true, upsert:true})
        .then((data)=>{      
                  
            res.json(data)
        }) 
        .catch(err=>{
            console.log("Controller error!!!");
            console.log(err);
            
            
        })
    },
    load: function(req, res){        
        db.findOne(
            {
                userId:req.params.id
            }, (err, data)=>{
                if(err) res.json({err})
                else res.json({data})
            }
        )
    }
};


