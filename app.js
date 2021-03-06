const express = require('express');

const app = express();
//var chalk = require('chalk');
var nunjucks = require('nunjucks');
const routes = require('./routes');
app.use('/', routes);
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks // point nunjucks to the proper directory for templates
nunjucks.configure('views', {noCache: true});

app.use(function (req, res, next) {
  //console.log(chalk.pink('Time:'), Date.now())
  console.log('Time:', Date.now())
  next()
});


// app.get('/modernism', function (req, res) {
//   console.log('modernism')
// })

// app.get('/', function(req, res) {
//   //res.send('Welcome, Friend!');
//   res.render('index', {title: 'Hall of Fame', people: people} );
// });

// app.get('/news', function(req, res) {
// 	res.send('Here\'s news!');
// })

app.listen(3000, function() {
	console.log('Server is listening.')
});
