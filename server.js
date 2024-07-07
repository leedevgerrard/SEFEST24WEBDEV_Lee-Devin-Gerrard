require('dotenv').config();
const connectDB = require('./config/connectDB');
const Item = require('./models/Item');
const router = require('./routes/root');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3500;

// connect to DB
connectDB(process.env.MONGO_URI);

// middlewares
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

// routes
app.use('/', router);

app.listen(port, () => {
  console.log(`POSIFIED server is running on http://localhost:${port}`);
})