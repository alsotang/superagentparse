var should = require('should');
var superagent = require('superagent');
var express = require('express');
var iconv = require('iconv-lite');
var parse = require('..');

var URL_PREFIX = 'http://localhost:3000/';

var app = express();

app.get('/utf-8', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.send(new Buffer('你好'));
});

app.get('/gbk', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.send(iconv.encode('你好', 'gbk'));
});

app.get('/big5', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.send(iconv.encode('你好', 'big5'));
});

describe('test/encoding.js', function () {
  before(function () {
    app.listen(3000);
  });

  it('should parse utf-8', function (done) {
    superagent
      .get(URL_PREFIX + 'utf-8')
      .parse(parse('utf-8'))
      .end(function (err, res) {
        res.text.should.equal('你好');
        done(err);
      });
  });

  it('should parse gbk', function (done) {
    superagent
      .get(URL_PREFIX + 'gbk')
      .parse(parse('gbk'))
      .end(function (err, res) {
        res.text.should.equal('你好');
        done(err);
      });
  });

  it('should parse big5', function (done) {
    superagent
      .get(URL_PREFIX + 'big5')
      .parse(parse('big5'))
      .end(function (err, res) {
        res.text.should.equal('你好');
        done(err);
      });
  });
});