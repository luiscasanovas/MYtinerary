const express = require('express');
const router = express.Router();
const cityModel = require('../models/cityModel'); 

router.get('/test', (req, res) => {
  res.send({ msg: 'Cities test route.' });
});

router.get('/all', (req, res) => {
  cityModel.find()
    .then(cities => {
      res.json(cities);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'An error occurred while retrieving cities' });
    });
});

router.post('/', (req, res) => {
  const nuevaCiudad = new cityModel({
    name: req.body.name,
    country: req.body.country,
    img: req.body.img
  });

  nuevaCiudad.save()
    .then(ciudad => {
      res.send(ciudad);
    })
    .catch(err => {
      res.status(500).send("Server error");
    });
});

module.exports = router;
