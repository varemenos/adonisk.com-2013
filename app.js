var routes = require('./routes');
var express = require('express');
var http = require('http');
var path = require('path');
var compression = require('compression');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorhandler = require('errorhandler');

var app = express();

var oneDay = 86400000;

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(compression());
app.use(favicon(path.join(__dirname, 'public/img/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(methodOverride());

// server and cache public assets
app.use(express.static(path.join(__dirname, 'public'), {
	maxAge: 30 * oneDay
}));

// development only
if (app.get('env') === 'development') {
	app.use(errorhandler());
}

app.get('/projects', routes.projects.index);
// app.get('/gallery', routes.gallery.index);
app.get('/tools/prettify', routes.tools.prettify);
app.get('/tools/prefixer', routes.tools.prefixer);
app.get('/tools/base64', routes.tools.base64);
app.get('/tools/url', routes.tools.url);
app.get('/tools/color', routes.tools.color);
app.get('/tools', routes.tools.index);
app.get('/resume', routes.resume.index);
app.get('/contact', routes.contact.index);
app.get('/home', routes.index);
app.get('/', function (req, res) {
	res.redirect('/home');
});

http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});
