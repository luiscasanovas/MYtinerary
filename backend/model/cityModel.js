const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  country: {
    type: String,
    required: true
  },
  img: {
    type: String
  }
});

module.exports = mongoose.model('City', CitySchema, 'Cities'); 
