var http = require('http');
var https = require('http');

// Fix http pooling issue
http.globalAgent.maxSockets = Infinity;
https.globalAgent.maxSockets = Infinity;