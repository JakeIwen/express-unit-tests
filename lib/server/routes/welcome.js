var express = require('express');
var router = express.Router();

router.use('/hello', function(req, res){
  res.send("Welcome to the spaceship factory!");
});

module.exports = router;
