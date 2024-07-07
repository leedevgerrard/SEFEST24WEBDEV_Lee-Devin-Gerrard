const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: false,
    default: ''
  }
},
{timestamps: true})

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;