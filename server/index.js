var news = require('./news');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var REST_PORT = 7777;

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

function newsConstructor(urlBase) {
  return function (news) {
    return {
      id: news.id,
      next: news.next,
      prev: news.prev,
      category: news.category,
      title: news.title,
      image: news.image,
      description: news.description,
    };
  };
}

app.get('/news/:id', function (req, res) {
  console.log('GET /news/' + req.params.id);
  var urlBase = 'http://' + req.hostname + ':' + REST_PORT;
  var newsItem = news
    .filter(function (x) {
      return x.id === parseInt(req.params.id);
    })
    .map(newsConstructor(urlBase))[0] || null;

  setTimeout(function () {
    if (newsItem) {
      console.log('    News title: "' + newsItem.title + '"');
      res.send(newsItem);
    } else {
      console.log('    News title: null');
      res.status(404).send('404. No such news.');
    }
  }, 1000);
});

var server = app.listen(REST_PORT, function () {
  var host = this.address().address;
  var port = this.address().port;

  console.log('Express server listening on http://%s:%s', host, port);
});
