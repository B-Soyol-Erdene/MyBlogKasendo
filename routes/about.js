const express = require('express');
const router = express.Router();
var path = require('path');
const connection = require('../connection/connection');

router.get('/about', function(request, response) {
    connection.query('SELECT * FROM accounts', function(error, res, field) {
        if (!error) {
            response.render("about", {users: res});
        }
        else{
            console.log(error);
        }
    });
});

module.exports = router;