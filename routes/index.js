const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');
const path = require('path');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/puppies', function(req, res) {
  console.log('this is working');
  //res.sendFile(path.join(__dirname, '../public/stylesheets', 'style.css'));
  //res.render('index.html');
  res.render('index');
});

router.get( '/users/:name', function (req, res) {
  res.render('index');
  console.log( req.params.name ); // --> 'nimit'
});

module.exports = router;