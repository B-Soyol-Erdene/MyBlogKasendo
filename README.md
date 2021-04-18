# MyBlogKasendo
Node_modules tataj suulgah - npm i node_modules; Package.json file deerh buh nemelt ugugdluudiig tataj suulgah; MySQL create database nodelogin; CREATE DATABASE IF NOT EXISTS nodelogin DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci; USE nodelogin;

CREATE TABLE IF NOT EXISTS accounts ( id int(11) NOT NULL, username varchar(50) NOT NULL, password varchar(255) NOT NULL, email varchar(100) NOT NULL ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO accounts (id, username, password, email ) VALUES (1, 'test', 'test', 'test@test.com');

ALTER TABLE accounts ADD PRIMARY KEY (id); ALTER TABLE accounts MODIFY id int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;

SELECT * FROM nodelogin.accounts;

CREATE TABLE IF NOT EXISTS Post ( id int(11) NOT NULL, title varchar(50) NOT NULL, description varchar(255) NOT NULL, image varchar(255) NOT NULL ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

ALTER TABLE Post ADD PRIMARY KEY (id); ALTER TABLE Post MODIFY id int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;

SELECT * FROM nodelogin.post;

Bugdiig hiij ugsunii daraa serveree asaah; npm start
