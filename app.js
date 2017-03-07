const express = require('express');
const app = express();
var chalk = require('chalk')

app.use(function (req, res, next) {
  //console.log(chalk.pink('Time:'), Date.now())
  console.log('Time:', Date.now())
  next()
})

app.get('/modernism', function (req, res) {
  console.log('modernism')
})

app.get('/', function(req, res) {
  res.send('Welcome, Friend!');
});

app.get('/news', function(req, res) {
	res.send('Here\'s news!');
})

app.listen(3000, function() {
	console.log('Server is listening.')
});
