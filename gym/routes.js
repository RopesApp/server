const express = require('express');
require('mongoose');

// get the DB schema
var Gym = require('./model.js');

var router = express.Router();

router.route('/gyms')
  .get(function(req, res) {
    res.json({ message: 'woo' });
  })
  .post(function(req, res) {
    // instantiate new instance of gym in DB
    var gym = new Gym();

    // pull POST data from the request
    gym.name = req.body.name
    gym.city = req.body.city
    gym.state = req.body.state

    // save the gym to the mongo DB
    gym.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Gym created!' });
    });
  });

module.exports = router
