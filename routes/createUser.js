var express = require('express');
var router = express.Router();
var connection = require('../connection/connection');
var path = require('path');

router.get('/createUser', function(request, response) {
	response.render("user/createUser");
});

router.post('/createUser', function (request, response) {
    var username = request.body.username;
    var password = request.body.password;
    var email = request.body.email;
    var photo = request.files.profilePhoto;
    var fileName = photo.name;
 
    photo.mv('./public/images/'+ fileName);

    connection.query('INSERT INTO `accounts` (`username`, `password`, `email`,`profilePicture` ) VALUES (?,?,?,?)', [username, password, email,fileName],
        function (error, results, fields) {
            if(!error){
            response.redirect('/admin');
            }else{
                console.log(error);
            }
        });
})
module.exports = router;