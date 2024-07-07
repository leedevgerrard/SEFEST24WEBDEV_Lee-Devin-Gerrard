require('dotenv').config();
const Item = require('../models/Item');
const defaultItems = require('../datas/defaultItems.json');
const connectDB = require('../config/connectDB');
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');

const setDefault = asyncHandler( async () => {
  await Item.deleteMany();
  await Item.insertMany(defaultItems);
  console.log('Success!');
  process.exit(0);
})

connectDB(process.env.MONGO_URI);
setDefault();