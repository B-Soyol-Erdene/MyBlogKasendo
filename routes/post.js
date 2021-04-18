const express = require('express');
const router = express.Router();
var path = require('path');
const connection = require('../connection/connection');



router.get('/post', function(request, response) {
	if (request.session.loggedin) {
		connection.query('SELECT * FROM post', function ( error, results, field){

		response.render("post", {users: results });
		});
	} else {
		response.render("login", { error: "please login" });
	}
});


module.exports = router;