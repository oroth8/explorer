const db = require('../models/Character');

// Export Controller Methods
module.exports = {
    create: function(req, res) {

        db.create(req.body)
        .then(()=>{
            res.json({sure:"whatever"})
        })
    }
};