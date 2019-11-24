var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let url = req.originalUrl.split('/')[1];
  console.log(url);
  res.render('services', {title: 'Our Services',url})
});

module.exports = router;
