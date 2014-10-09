# superagentparse

This npm module is used to support encoding issue when using `superagent`.

## example

```js
var parse = require('superagentparse');

superagent
  .get('http://gbk_page_url/')
  // here is the key, can be also: 
  // CP932, CP936, CP949, CP950, GB2313, GBK, GB18030, Big5, Shift_JIS, EUC-JP
  .parse(parse('gbk')) 
  .end(function (err, res) {
    res.text.should.equal('你好');
    done(err);
  });

// when encoding is 'buffer', remember call `req.buffer(true)`
superagent
  .get('https://www.google.com/images/srpr/logo11w.png')
  .parse(parse('buffer'))
  .buffer(true)
  .end(function (err, res) {
    Buffer.isBuffer(res.text).should.be.true;
    done(err);
  });
```

for more infomation, please see: [encoding.js](test/encoding.js)
