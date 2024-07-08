const express = require('express');
const router = express.Router();
const Itinerary = require('../models/itineraryModel');
const City = require('../models/cityModel');

router.post('/', (req, res) => {
  const { title, profilePicture, rating, duration, price, hashtags, city } = req.body;

  City.findOne({ name: city })
    .then(foundCity => {
      if (!foundCity) {
        return res.status(404).json({ error: 'City not found' });
      }

      const newItinerary = new Itinerary({
        title,
        profilePicture,
        rating,
        duration,
        price,
        hashtags,
        city: foundCity.name
      });

      return newItinerary.save();
    })
    .then(savedItinerary => {
      res.status(201).json(savedItinerary);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while saving the itinerary.' });
    });
});

module.exports = router;
