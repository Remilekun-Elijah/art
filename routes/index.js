var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let url = req.originalUrl.split('/')[1] || 'home';
  res.render('index', { title: 'Welcome to Absoluterisktec', url });
});

module.exports = router;
