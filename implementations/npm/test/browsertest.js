'use strict';

var
  test = require('tape'),
  express = require('express'),
  request = require('supertest'),
  config = require('../package.json').defaultConfig;

var
  app = express(),
  rootDir = '../dist',
  port = config.port || process.env.TODO_PORT,
  server,
  expectedBody = {'response': true};


// Set up test server
server = app.get('/app.js', function (req, res) {
  res.status(200).send(expectedBody);
}).listen(port, function () {

  test('page', function (t) {

    request('http://localhost:' + port)
      .get('/app.js')
      .end(function (err, res) {

        t.error(err, 'should not throw error');
        t.deepEqual(res && res.body, expectedBody, 'should return the correct response');

        server.close();
        t.end();
      });
  });

});
