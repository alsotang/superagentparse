# superagentparse

This npm module is used to support encoding issue when using `superagent`.

## example

```js
var parse = require('superagentparse');

superagent
  .get(URL_PREFIX + 'gbk')
  .parse(parse('gbk')) // here is the key
  .end(function (err, res) {
    res.text.should.equal('你好');
    done(err);
  });
```

for more infomation, please see: [encoding.js](test/encoding.js)