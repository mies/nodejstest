var express = require('express');
var app = express.createServer();

app.get('/', function(req, res) {
  'use strict';
  res.send("<h1 style='font-size: 500%;'>Hello World!</h1>");
});

app.listen(8080, function() {
});
