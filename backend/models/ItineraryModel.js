const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItinerarySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true,
    min: [1, 'Duration must be at least 1 day'],
    validate: {
      validator: Number.isInteger,
      message: 'Duration must be an integer value'
    }
  },
  price: {
    type: Number,
    required: true
  },
  hashtags: [{
    type: String,
    required: true
  }],
  city: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Itinerary', ItinerarySchema);
