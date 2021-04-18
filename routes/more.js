const express = require('express');
const router = express.Router();
const conn = require('../connection/connection');

router.get('/more', function(request, response) {
	response.render("more");
});


module.exports = router;

