const mongoose = require('mongoose')

// Schema of the Model to one menu
const menuSchema = new mongoose.Schema({
  code: Number,
  name: String,
  cookingTime: Number,
  ingredients: {},
})

// Export the model
module.exports = mongoose.model('Menus', menuSchema)