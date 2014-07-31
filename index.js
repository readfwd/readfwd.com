var express = require('express');
var compression = require('compression');
var seo = require('mean-seo');

var app = express();

// Enable gzip compression.
app.use(compression());

// Enable PhantomJS-enabled SEO.
app.use(seo());

app.use('/', express.static(__dirname + '/dist'));
app.listen(process.env.PORT);

