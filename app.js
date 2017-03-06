const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Welcome, Friend!');
});

app.get('/news', function(req, res) {
	res.send('Here\'s news!');
})

app.listen(3000, function() {
	console.log('Server is listening.')
});
