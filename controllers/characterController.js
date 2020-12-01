const db = require('../models/Character');

// Export Controller Methods
module.exports = {
    create: function(req, res) {

        db.create(req.body)
        .then((data)=>{
            res.json({resp:data})
        })
    },
    load: function(req, res){
        console.log('loading');
        
        console.log(req.params)
        
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


