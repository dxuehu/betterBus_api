var express = require('express');
var restbus = require('restbus');
var http = require('http');
var cors = require('cors');

var app = express();
app.use(cors());
 
http.createServer(express).listen('3030', function() {
  console.log('app is now listening on port 3030');
  restbus.listen(function() {
    console.log('restbus is now listening on port 3535');
  });
});