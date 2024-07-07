const asyncHandler = require('express-async-handler');
const Item = require('../models/Item');
const mongoose = require('mongoose');

const connectDB = asyncHandler( async (uri) => {
  await mongoose.connect(uri);
  console.log('mongoDB connected sucessfully!');
})

module.exports = connectDB;