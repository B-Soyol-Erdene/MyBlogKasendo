var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var dotenv = require('dotenv');
var ejs = require('ejs');
var connection = require('./connection/connection');
var path = require('path');
var fileUpload = require('express-fileUpload');



//dotenv.config();
//var app = express();

//app.use(fileUpload());

// use css and js and photos
//app.use(express.static(__dirname + '/public'));




//local routes
var index = require('./routes/index');


var more = require('./routes/more');
var admin = require('./routes/admin');
var login = require('./routes/login');
var register = require('./routes/register');
var editUser = require('./routes/edit-user');
var deleteUser = require('./routes/delete-user');
var post = require('./routes/post');
var createUser = require('./routes/createUser');
var about = require('./routes/about');
var blogPost = require('./routes/blogPost');
var editBlog = require('./routes/editBlog');
var deletepost = require("./routes/delete-post");
var readmore = require("./routes/readmore");

dotenv.config();

var app = express();


app.use(fileUpload(__dirname + '/public'));
// use css and js and photos
app.use(express.static(__dirname + '/public'));



app.set("views", path.join(__dirname + '/view'));
app.set('view engine', 'ejs');

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use('/', index);
app.use('/', login);
app.use('/', more);
app.use('/', admin);
app.use('/', register);
app.use('/', editUser);
app.use('/', deleteUser);
app.use('/', post);
app.use('/', createUser);
app.use('/', about);
app.use('/', blogPost);
app.use('/', editBlog);
app.use('/', deletepost);
app.use('/', readmore);


//app.post('/auth', function(request, response) {
	//var username = request.body.username;
	//var password = request.body.password;
	//if (username && password) {
	//	connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
		//	if (results.length > 0) {
			//	request.session.loggedin = true;
			//	request.session.username = username;
			//	response.redirect('/admin');
			//} else {
			//	response.send('Incorrect Username or Password!');
			//}			
			//response.end();
		//});
	//} else {
		//response.send('Please enter Username and Password!');
		//response.end();
	//}
//});

//app.get('/logout', function(request, response) {
	///request.session.loggedin = false;
	//request.session.username = null;
	//response.render("login");
//});

app.listen(process.env.SERVER_PORT, () => console.log('Server start ${process.env.SERVER_PORT} '));