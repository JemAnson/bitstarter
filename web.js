
var buf= new buffer(256);
buf = fs.readFileSync("index.html");

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString('utf8',0,len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
