import Item from '../models/itemModel.js';

// Add 'export' before 'const' for every function
export const getItems = async (req, res, next) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    next(error);
  }
};

export const createItem = async (req, res, next) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    next(error);
  }
};

export const editItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedItem = await Item.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true
    });

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    next(error);
  }
};

export const deleteItem = async (req, res, next) => {
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
