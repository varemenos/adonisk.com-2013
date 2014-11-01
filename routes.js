exports.index = function (req, res) {
	res.render('home/index', {
		title: 'Adonis K.'
	});
};

exports.projects = {};
exports.projects.index = function (req, res) {
	res.render('projects/index', {
		title: 'Projects | Adonis K.'
	});
};

exports.gallery = {};
exports.gallery.index = function (req, res) {
	res.render('gallery/index', {
		title: 'Gallery | Adonis K.'
	});
};

exports.tools = {};
exports.tools.index = function (req, res) {
	res.render('tools/wip', {
		title: 'Tools | Adonis K.'
	});
};

exports.tools.prettify = function (req, res) {
	res.render('tools/prettify', {
		title: 'Prettify | Adonis K.'
	});
};

exports.tools.prefixer = function (req, res) {
	res.render('tools/prefixer', {
		title: 'CSS Prefixer | Adonis K.'
	});
};

exports.tools.base64 = function (req, res) {
	res.render('tools/base64', {
		title: 'Base64 Decoder | Adonis K.'
	});
};

exports.tools.unicode = function (req, res) {
	res.render('tools/unicode', {
		title: 'Unicode Decoder | Adonis K.'
	});
};

exports.tools.url = function (req, res) {
	res.render('tools/url', {
		title: 'Url Decoder | Adonis K.'
	});
};

exports.tools.color = function (req, res) {
	res.render('tools/color', {
		title: 'Color Tool | Adonis K.'
	});
};

exports.resume = {};
exports.resume.index = function (req, res) {
	res.render('resume/index', {
		title: 'Resume | Adonis K.'
	});
};

exports.contact = {};
exports.contact.index = function (req, res) {
	res.render('contact/index', {
		title: 'Contact | Adonis K.'
	});
};
