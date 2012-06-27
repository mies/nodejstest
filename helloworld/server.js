var express = require('express');
var app = express.createServer(express.logger());

app.configure(function() {
  'use strict';
  app.use(express.bodyParser());
  app.use(app.router);
});

app.get('/', function(req, res) {
  'use strict';
  res.send("<h1 style='font-size: 500%;'>Hello World!</h1>");
});

app.get('/json', function(req, res) {
  'use strict';
  res.send({'hello' : 'all!'});
});

//var port = process.env.PORT || 8080 ;

app.listen(8080, function() {
  'use strict';
  console.log('listening on port ' + port);
});
