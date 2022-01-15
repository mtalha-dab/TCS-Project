var express = require('express');
var router = express.Router();
var Class = require('../models/class');



router.get('/',async function(req, res, next) {
    await Class.find({}).exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });


    
});




    
});

module.exports = router;
