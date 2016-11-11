var express = require('express');
var router = express.Router();

router.get('/hello', function(req, res){
  res.send("Welcome to the spaceship factory!");
});

function spaceshipWelcome(req,res){
  res.send("Welcome to the spaceship factory!");
}

module.exports = router;
