var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users',{title:'user'});
  //res.send('respond with a resource');
});

router.get('/name', function(req, res, next) {
    res.render('name');
    //res.send('respond with a resource');
});

module.exports = router;
