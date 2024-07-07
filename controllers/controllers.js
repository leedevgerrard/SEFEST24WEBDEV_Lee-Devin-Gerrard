const express = require('express');
const asyncHandler = require('express-async-handler');
const Item = require('../models/Item');

// GET - get all items
const getAllItems = asyncHandler( async (req, res) => {
  const items = await Item.find();
  res.status(200).json(items);
})

// POST - add an item
const addItem = asyncHandler( async (req, res) => {
  const item = await Item.create(req.body);
  res.status(200).json(item);
})

// PATCH - update an item
const updateItem = asyncHandler( async (req, res) => {
  res.status(200).send('Update success!');
})

// DELETE - delete an item
const deleteItem = asyncHandler( async (req, res) => {
  res.status(200).send('Delete success!');
})

module.exports = {getAllItems, addItem, updateItem, deleteItem};