var express = require('express');
var router = express.Router();
var times=0
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('user access are : '+times);
  
  times=times+1
});

module.exports = router;
