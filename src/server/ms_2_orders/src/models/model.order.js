const mongoose = require('mongoose')

// Schema of the Model to one menu
const orderSchema = new mongoose.Schema({
  menu: Number,
  date: Date,
  delivered: Boolean,
}, { versionKey: false })

// Export the model
module.exports = mongoose.model('Orders', orderSchema)