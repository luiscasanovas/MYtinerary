const express = require('express');
const router = express.Router();
const Itinerary = require('../models/itineraryModel');

router.get('/', (req, res) => {
  const { cityName } = req.query;
  const filter = cityName ? { city: cityName } : {};

  Itinerary.find(filter)
    .then(itineraries => {
      res.json(itineraries);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while retrieving itineraries.' });
    });
});

router.post('/', (req, res) => {
  const { title, profilePicture, rating, duration, price, hashtags, city } = req.body;

  const newItinerary = new Itinerary({
    title,
    profilePicture,
    rating,
    duration,
    price,
    hashtags,
    city
  });

  newItinerary.save()
    .then(itinerary => {
      res.status(201).json(itinerary);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while saving the itinerary.' });
    });
});

module.exports = router;
