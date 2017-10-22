require('dotenv').load();
var express = require('express');
var bodyParser = require('body-parser');
var parseFeedService = require('./services/rss2json/rss2json');

var app = express();
app.use(bodyParser.json());

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});

// API ROUTES BELOW

// Generic error handler used by all endpoints.

function handleError(res, reason, message, code) {
  console.error(reason);
  res.status(code || 500).json({"error": message});
}

// GET /api/feeds -> returns json from rss_url

app.get("/api/feeds", function(req, res) {
   parseFeedService(req.query.rss_url, function(json) {
    res.jsonp(json)
   });
});

module.exports = app;