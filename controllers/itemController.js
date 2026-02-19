const Item = require('../models/itemModel');

const getItems = async (req, res, next) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    next(error);
  }
};

const createItem = async (req, res, next) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    next(error);
  }
};

const deleteItem = async (req, res, next) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ message: "Item deleted successfully", id: req.params.id });
  } catch (error) {
    next(error);
  }
};

module.exports = { getItems, createItem, deleteItem };
