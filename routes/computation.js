
var express = require('express');
var router = express.Router();

/* GET home page. */
var x= Math.floor(Math.random())
router.get('/', function(req, res, next) {
  res.render('computation', { title: 'computation on server' },{result: 'Math.abs() applied to '+x+' is '+Math.abs(x)},{result1: 'Math.acos() applied to '+x+' is '+Math.acos(x)},{result2: 'Math.sin() applied to '+x+' is '+Math.sin(x)}),{result: 'Math.sinh() applied to '+x+' is '+Math.sinh(x)};
});

module.exports = router;
