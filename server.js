var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.use('js/app.app', express.static(__dirname + '/public/js/app.js'));
app.listen(8090);