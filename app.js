var express = require('express'),
  app = express(),
  path = require('path'),
  bodyParser = require('body-parser');

var routes = require('./routes');
/*var babble = require('./routes/babble');
var indexRoute=require('./routes/index');*/

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', routes);
app.get('index', routes);
app.get('/queryData', routes);

app.get('*', function(req, res) {
  res.send('<h1>404 Error</h1>File not found');
});

var server = app.listen(8080, function() {
  console.log("Server started");
});
