var express = require('express');
var router = express.Router();
var connection = require('../connection/connection');
var path = require('path');

router.get('/blogPost', function(request, response) {
	response.render("blogPost");
});

router.post('/blogPost', function(request, response) {
 
    var title = request.body.title;
    var description =request.body.description;
    var photo = request.files.postImage;
    var fileName = photo.name;
    var date= Date();

    photo.mv('./public/images'+ fileName);

    console.log(request.body.title);
    
        connection.query('INSERT INTO `post`( title, description, image, date) VALUES (?,?,?,?);', [title, description, fileName,date],
         function(error, results, fields) {
            if (!error) {
                
                response.redirect('post');
            } else {
                console.log(error);
            }			
        
        });
    
});
module.exports = router