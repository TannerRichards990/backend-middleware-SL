const { Router } = require('express');
const blue = require('../middleware/blue');
const red = require('../middleware/red');
const colors = require('../middleware/colors');
const yellow = require('../middleware/yellow');

// what middleware does this route need to pass?

module.exports = Router().get('/purple', [colors, red, blue], (req, res, next) => {
  res.json(req.colors);
  next();
})

  .get('/orange', [colors, red, yellow], (req, res, next) => {
    res.json(req.colors);
    next();
  })

  .get('/green', [colors, yellow, blue], (req, res, next) => {
    res.json(req.colors);
    next();
  })

  .get('/red-orange', [colors, red, red, yellow], (req, res, next) => {
    res.json(req.colors);
    next();
  });


