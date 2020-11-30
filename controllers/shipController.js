const db = require('../models/Ship');

// Export Controller Methods
module.exports = {
    loadAll: function(req, res){
        db.find({}, (err, data)=>{
                if(err) res.json({err})
                else res.json({data})
            }
        )
    }
};


