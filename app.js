var routes = require('./routes');
var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

var oneDay = 86400000;

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.compress());
app.use(express.favicon(path.join(__dirname, 'public/img/favicon.ico')));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

// server and cache public assets
app.use(express.static(path.join(__dirname, 'public'), {
	maxAge: 30 * oneDay
}));

// production only
if (app.get('env') === 'development') {
	app.use(express.errorHandler());
}

app.get('/projects', routes.projects.index);

// app.get('/gallery', routes.gallery.index);

app.get('/tools/prettify', routes.tools.prettify);
app.get('/tools/prefixer', routes.tools.prefixer);
app.get('/tools/base64', routes.tools.base64);
app.get('/tools/unicode', routes.tools.unicode);
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
