const express = require('express');
const router = express.Router();
const City = require('../model/cityModel'); 

router.get('/', (req, res) => {
  res.send('Cities');
});

router.get('/all', (req, res) => {
  City.find()
    .then(cities => {
      res.json(cities);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'An error occurred while retrieving cities' });
    });
});

module.exports = router;
