const express = require('express');
const router = express.Router();
const { getItems, createItem, deleteItem, editItem } = require('../controllers/itemController');

router.route('/').get(getItems).post(createItem);
router.route('/:id').delete(deleteItem);
router.route('/:id').put(editItem).delete(deleteItem);

module.exports = router;
