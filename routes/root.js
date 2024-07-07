const express = require('express');
const router = express.Router();
const {getAllItems, addItem, updateItem, deleteItem} = require('../controllers/controllers');

router.route('/items').get(getAllItems).post(addItem).patch(updateItem).delete(deleteItem);

module.exports = router;