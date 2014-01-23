exports.index = function(req, res){
  res.render('index', {});
};

exports.formatter = function(req, res){
  res.render('formatter', {});
};

exports.prefixer = function(req, res){
  res.render('prefixer', {});
};

exports.base64 = function(req, res){
  res.render('base64', {});
};


exports.unicode = function(req, res){
  res.render('unicode', {});
};