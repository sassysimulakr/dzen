var express = require('express');
var app = express();
fs = require('fs');

app.set('view engine', 'jade');

var pub = __dirname;

// setup middleware

app.use(express.static(pub));

// Optional since express defaults to CWD/views

app.set('views', __dirname);

var message;

fs.readFile('./stuff/spectacle.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  } else {
    message = data;
  }
});

app.get('/', function (req, res) {
  res.render('./views/index.jade', { quote : obfuscate(message)});
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});

var obfuscate = function(data){
  var pairElems = data.split('\n');
  var i = 0;
  var elems = [];
  pairElems.map((item) => {
    if (i % 2 != 0) {
      elems.push(pairElems[i-1] + item)
    }
    i++;
  })
  var ran = Math.floor(Math.random() * elems.length);
  return elems[ran];
}
