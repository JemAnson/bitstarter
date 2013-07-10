
//var buf= new buffer(256);
//buf = fs.readFileSync("index.html");
//var data = buf.toString('utf8',0,buf.length);
var data = "Hello";

alert(data);
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
