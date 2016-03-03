var fs = require("fs");
var https = require ("https");
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


app.get('/zipcode', function (req, res) {
  var zipNum = req.query.zip;
  var legislators = [];
  var request = https.get("https://congress.api.sunlightfoundation.com/legislators/locate?apikey=6bb531cf085c4e28b12a9e6645dc0bf4&zip=" + req.query.zip, function(response){
    var body = '';
    response.on('data', function(data){
     body += data;

    response.on('end', function(){
     var legislators = [];
     var info = JSON.parse(body);
     for(var w = 0; w < info.count; w++) {
      administrator = {
        first_name: info.results[w].first_name,
        last_name: info.results[w].last_name,
        party: info.results[w].party,
        twitter: info.results[w].twitter_id
      }
      legislators.push(administrator);
    }
    console.log(legislators);
     res.render('zipcode.ejs', {zipNum: zipNum, legislators: legislators});
  });
  });
  });
});



