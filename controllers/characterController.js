const db = require('../models/Character');

// Export Controller Methods
module.exports = {
    create: function(req, res) {
        // Many thanks to Paul and to:
        // https://stackoverflow.com/questions/17244363/mongoose-findoneandupdate-upsert-id-null  
        db.findOneAndUpdate({userId:req.body.userId}, req.body, {new:true, upsert:true})
        .then((data)=>{            
            res.json({resp:data})
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


