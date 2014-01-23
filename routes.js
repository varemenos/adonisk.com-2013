exports.index = function(req, res){
  res.render('index', {});
};

exports.unicode = function(req, res){
  res.render('unicode', {});
};

exports.base64 = function(req, res){
  res.render('base64', {});
};

exports.formatter = function(req, res){
  res.render('formatter', {});
};