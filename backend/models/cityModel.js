const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  country: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, { collection: 'Cities' }); 

module.exports = mongoose.model('City', CitySchema);
