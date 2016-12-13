const path = require('path');
const express = require('express');
const app = express();

const forceSSL = function() {
  return function (req, res, next) {
    var FORCE_HTTPS = true;
    if (req.headers['x-forwarded-proto'] !== 'https' && FORCE_HTTPS) {
      return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    next();
  }
}

// app.use(forceSSL());

app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT || 8080);