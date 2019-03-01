const url = require('url');
const fs = require('fs');


const express = require('express')
const bodyParser = require('body-parser');
const app = express()
var server = require('http').Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
  	res.set({
  		'Access-Control-Allow-Origin': '*',
  		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
  		'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With'
  	});
  	var q = url.parse(req.url, true);
  	var fileName = "." + q.pathname;
  	if (fileName === "./"){
  		fileName = "./index.html";
  	} 
  	fs.readFile(fileName, function(err, data) {
		if (err) {
			return res.end("404 Not Found: " + fileName);
		}
		res.end(data);
	});
});

app.listen(process.env.PORT || 8080, function(){
    console.log("Server connected. Listening on port: " + (process.env.PORT || 8080));
});





