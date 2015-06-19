var app = require('express'),
    restbus = require('restbus');
 
http.createServer(app).listen('3030', function() {
  console.log('app is now listening on port 3030');
  restbus.listen(function() {
    console.log('restbus is now listening on port 3535');
  });
});