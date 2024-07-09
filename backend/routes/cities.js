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

router.get('/:id', (req, res) => {
  const { id } = req.params;

  City.findById(id)
    .then(city => {
      if (!city) {
        return res.status(404).json({ error: 'City not found' });
      }
      res.json(city);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while retrieving the city.' });
    });
});

module.exports = router;
