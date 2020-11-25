//  Connect to db
// const db = require('../models');
const db = 'hello';

// Export Controller Methods
module.exports = {
    create: function(req, res) {
        res.json(db);
    }
};