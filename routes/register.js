var express = require('express');
var router = express.Router();
var connection = require('../connection/connection');
var path = require('path');

router.get('/register', function(request, response) {
	response.render("register");
});

router.post('/register', function (request, response) {
    var username = request.body.username;
    var password = request.body.password;
    var email = request.body.email;
    var photo = request.files.profilePhoto;
    var fileName = photo.name;
 

    connection.query('INSERT INTO `accounts` (`username`, `password`, `email`) VALUES (?,?,?,?);', [username, password, email],
        function (error, results, fields) {
            photo.mv('./public/avatars/'+ fileName);
            response.redirect('/login');

        });
})

module.exports = router;