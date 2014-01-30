exports.index = function(req, res){
	res.render('home/index', {title: 'Adonis K.'});
};

exports.projects = {};

exports.projects.index = function(req, res){
	res.render('projects/index', {title: 'Adonis K. > Projects'});
};

exports.gallery = {};

exports.gallery.index = function(req, res){
	res.render('gallery/index', {title: 'Adonis K. > Gallery'});
};

exports.tools = {};

exports.tools.index = function(req, res){
	res.render('tools/formatter', {title: 'Adonis K. > Tools'});
};

	exports.tools.formatter = function(req, res){
		res.render('tools/formatter', {title: 'Adonis K. > Code Formatter'});
	};

	exports.tools.prefixer = function(req, res){
		res.render('tools/prefixer', {title: 'Adonis K. > CSS Prefixer'});
	};

	exports.tools.base64 = function(req, res){
		res.render('tools/base64', {title: 'Adonis K. > Base64 Coder'});
	};

	exports.tools.unicode = function(req, res){
		res.render('tools/unicode', {title: 'Adonis K. > Unicode Coder'});
	};

	exports.tools.url = function(req, res){
		res.render('tools/url', {title: 'Adonis K. > Url Coder'});
	};

	exports.tools.color = function(req, res){
		res.render('tools/color', {title: 'Adonis K. > Color Tool'});
	};

exports.about = {};

exports.about.index = function(req, res){
	res.render('about/index', {title: 'Adonis K. > About'});
};

exports.contact = {};

exports.contact.index = function(req, res){
	res.render('contact/index', {title: 'Adonis K. > Contact'});
};