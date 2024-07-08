const express = require('express');
const router = express.Router();
const City = require('../models/cityModel');

router.get('/all', (req, res) => {
  City.find({})
    .then(cities => {
      res.json(cities);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while retrieving cities.' });
    });
});

router.post('/', (req, res) => {
  const { name, country, img } = req.body;

  const newCity = new City({
    name,
    country,
    img
  });

  newCity.save()
    .then(city => {
      res.status(201).json(city);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while saving the city.' });
    });
});

module.exports = router;
