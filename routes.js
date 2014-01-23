exports.index = function(req, res){
  res.render('index', {title: 'Adonis K. > Tools'});
};

exports.formatter = function(req, res){
  res.render('formatter', {title: 'Adonis K. > Code Formatter'});
};

exports.prefixer = function(req, res){
  res.render('prefixer', {title: 'Adonis K. > CSS Prefixer'});
};

exports.base64 = function(req, res){
  res.render('base64', {title: 'Adonis K. > Base64 Coder'});
};

exports.unicode = function(req, res){
  res.render('unicode', {title: 'Adonis K. > Unicode Coder'});
};

exports.url = function(req, res){
  res.render('url', {title: 'Adonis K. > Url Coder'});
};