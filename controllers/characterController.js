const db = require('../models/Character');

// Export Controller Methods
module.exports = {
    create: function(req, res) {
        // db.CharacterCreator.create(req.body)
        console.log(req.body);
    }
};