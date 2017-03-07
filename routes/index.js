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
  res.sendFile(path.join(__dirname, '../public/stylesheets', 'style.css'));
  //res.render('index.html');
});

module.exports = router;