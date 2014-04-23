var BufferHelper = require('bufferhelper');
var iconv = require('iconv-lite');

module.exports = function (encoding) {
  var parseText = function(res, done) {
    res.text = new BufferHelper();
    res.on('data', function (chunk) {
      res.text.concat(chunk);
    });
    res.on('end', function() {
      res.text = iconv.decode(res.text.toBuffer(), encoding);
      done();
    });
  };
  return parseText;
};