var fs = require("fs");
var express = require('express');
var app = express();
var bodyParser = require('body-parser'); 
var path = require('path');
var text; //used primarily to allow restoring jsons back on server 

var ejs = require('ejs');

app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/public", express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs'); //don't have to use the .js file extension

app.listen(process.env.PORT || 5000);

app.get('/', function (req, res) {

  res.render('index.ejs');

});