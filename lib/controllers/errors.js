const { Router } = require('express');


module.exports = Router()
  .get('/teapot', (req, res, next) => {
    res.status(418).send('I\'m a teapot');
    next();
  })

  .get('/payment', (req, res, next) => {
    res.status(402).send('Payment required');
    next();
  });
  


