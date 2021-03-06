var http = require('http');
var https = require('https');
var cp = require('child_process');
var _ = require('lodash');
var parse = require('./calURLParse');

module.exports = function(port) {
  http.createServer(function(req,res){

    if (req.method === 'GET' && req.url === '/weather') {
      res.writeHeader(200, {
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : '*'
      });

      https.get('https://api.forecast.io/forecast/52b0f2a10c9f18f8bda8331485c532de/36.1658,-86.7777')
        .on('response', function (xhr) {
          xhr.pipe(res);
        });
    } else if (req.method === 'GET' && req.url === '/starwars') {
      http.get('http://swapi.co/api/films/')
        .on('response', function (xhr) {
          var body = '';
          xhr
            .on('data', function (chunk) {
               body += chunk;
            })
            .on('end', function () {
              var data = JSON.parse(body)

              data.results.forEach(function(r) {
                res.write(r.title + '\n');
              });

              res.end();
            });
        });
    } else if (req.method === 'GET' && _.startsWith(req.url, '/cal')) {
      cp.exec(parse(req.url), function(err, stdout) {
        res.end(stdout);
      });

    } else {
      res.writeHead(403);
      res.end('Access Denied!\n');
    }

  }).listen(port);
}
