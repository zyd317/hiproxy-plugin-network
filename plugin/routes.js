'use strict';
var path = require('path');
var url = require('url');
var fs = require('fs');
var os = require('os');
var querystring = require('querystring');
var mustache = require('mustache');
var Socket = require('../socket');
var socketInstance;
var getMimeType = require('simple-mime')('text/plain');

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ', err.stack);
});

module.exports = [
  {
    route: '/network',
    render: function (route, request, response) {
      response.writeHead(301, {
        Location: '/network/'
      });

      response.end();
    }
  },
  {
    route: '/fetchresponse',
    render: function (route, request, response) {
      var query = querystring.parse(request.url.split('?')[1]);
      response.setHeader('Content-Type', query.contentType);

      let _path = path.join(os.tmpdir(), '.hiproxy-network-cache');
      let content = fs.readFileSync(path.join(_path, query.reqId));

      response.end(content);
    }
  },
  {
    route: '/network/(*)',
    render: function (route, request, response) {
      var pageName = route._ || 'src/home/index.html';
      var filePath = path.join(__dirname, '..', pageName);
      var hiproxyServer = global.hiproxyServer;

      if (pageName === 'src/home/index.html') {
        if (!socketInstance) {
          socketInstance = new Socket();

          hiproxyServer.on('request', function (detail) {
            var req = detail.req;
            var res = detail.res;
            socketInstance.emit('request', req, res);
          });

          hiproxyServer.on('data', function (detail) {
            var data = detail.data;
            var req = detail.req;
            var res = detail.res;
            // var proxy = detail.proxy;

            if (res && res.headers &&
                res.headers['content-type'] &&
                res.headers['content-type'].indexOf(/(image|ico|bmp)/) !== -1) {
              data = '';
            }
            socketInstance.emit('data', data.toString(), req, res);
          });

          hiproxyServer.on('response', function (detail) {
            // var data = detail.data;
            var req = detail.req;
            var res = detail.res;
            var proxy = detail.proxy;
            socketInstance.emit('response', req, res, proxy);
          });

          hiproxyServer.on('connect', function (detail) {
            var request = detail.req;
            var socket = detail.socket;
            var head = detail.head;
            var urlObj = url.parse('https://' + request.url);
            var hostname = urlObj.hostname;
            var port = urlObj.port || 443;

            socketInstance.emit('connect', hostname, port, request, socket, head);
          });

          return render(filePath, response);
        }
      }

      sendFile(filePath, response);
    }
  }
];

function render (file, res, data) {
  var statusCode = 200;
  var content = null;

  fs.readFile(file, 'utf-8', function (err, text) {
    if (err) {
      statusCode = 500;
      content = err.stack;
    } else {
      content = mustache.render(text, data);
    }

    res.writeHead(statusCode, {
      'Content-Type': 'text/html',
      'Powder-By': 'hiproxy-plugin-network'
    });

    res.end(content);
  });
}

function sendFile (file, res) {
  var mime = getMimeType(file);
  var statusCode = 200;
  var stream = null;

  if (fs.existsSync(file)) {
    stream = fs.createReadStream(file);
  } else {
    statusCode = 404;
  }

  if (stream) {
    res.writeHead(statusCode, {
      'Content-Type': mime,
      'Powered-By': 'hiproxy-plugin-dashboard'
    });
    stream.pipe(res);
  } else {
    res.end('File Not Exists.');
  }
}
