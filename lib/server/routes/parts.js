var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var spaceshipParts = require('../modules/spaceship-parts');

router.get('/', function(req, res){ // parts/parts baby
  res.send(spaceshipParts);
});

router.post('/new', function(req, res){ // keep me posted if you solve this one
  spaceshipParts.push(req.body);
  res.sendStatus(201);
});

router.get('/rocketCount', function(req, res){
  var numberOfSpaceships = Math.floor(spaceshipParts[0].inStock/spaceshipParts[0].needed);
  for(var i = 1; i < spaceshipParts.length; i++){
    numberOfSpaceships = Math.min(numberOfSpaceships, Math.floor(spaceshipParts[i].inStock/spaceshipParts[i].needed));
  }
  console.log('ships: ' + numberOfSpaceships);
  var howMany = { count: numberOfSpaceships }
  res.send(howMany);  // numberOfSpaceships is a number, how does express like that?
});

module.exports = router;
