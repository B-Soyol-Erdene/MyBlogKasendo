const express = require('express');
const connection = require('../connection/connection');
const router = express.Router();
const conn = require('../connection/connection');


router.get('/', function(request, response) {
	connection.query('SELECT * FROM post', (error, results) => {
		if (!error) {
			response.render("index", { users: results});
		}else {
			console.log(error);
		}
	});
});


module.exports = router;