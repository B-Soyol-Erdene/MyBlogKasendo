var express = require('express');
var router = express.Router();
var connection = require('../connection/connection');
var path = require('path');


router.get('/editBlog/:id', function(request, response) {
    var id = request.params.id;
    connection.query('SELECT * FROM post WHERE id = ?', [id], function (error, results, fields) {
        if (!error) {
            response.render("editBlog", {blog: results[0]});
        }  else {
            console.log(error);
        }            
    })
});
router.post('/edit/blog/:id', function(request, response) {
    var title = request.body.title;
     var description =request.body.description;
     var photo = request.files.postImage;
     var fileName = photo.name;
     var date= Date();
     var id = request.params.id;
    connection.query('UPDATE post SET title =?, description =?, image =?   WHERE id = ?', [title,description,fileName,id], function (error, results, fields) {
        if (!error) {
            request.session.loggedin = true;
            photo.mv('./public/images'+ fileName);
            response.redirect("/post");
        }  else {
            console.log(error);
        }            
    })
});




//router.get('/editBlog/:id', function(request, response) {
   // var id = request.params.id;
   // connection.query('SELECT * FROM post WHERE id = ?', [id], function (error, results, fields) {
    //    if (!error) {
     //       response.render("editBlog", {blog: results[0]});
      //  }  else {
      //      console.log(error);
      //  }            
    //})
//});
//router.post('/editBlog/:id', function(request, response) {
  //  var title = request.body.title;
   // var description =request.body.description;
  //  var photo = request.files.postImage;
   // var fileName = photo.name;
   // var date= Date();
   // var id = request.params.id;
     //   connection.query('UPDATE post SET title=?, description=?, image=?, date=? WHERE id =?', [title, description, fileName,date,id],
      //   function(error, results, fields) {
        //    if (!error) {
           //     photo.mv('./public/images'+ fileName);
            //    response.redirect('post');
           // } else {
           //     console.log(error);
           // }			
       // 
        //});
    
//});

module.exports = router;