const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema ({
  name: String,
  description: String,
  calories: String,
  totalFat: String,
  fiber: String,
  sugar: String,
  protein: String,
  carbs: String
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
