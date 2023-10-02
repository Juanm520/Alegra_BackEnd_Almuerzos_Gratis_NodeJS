const mongoose = require('mongoose')

// Schema of the Model to one menu
const orderSchema = new mongoose.Schema({
  '_id': mongoose.ObjectId,
  'menu': Number,
  'date': Date,
  'delivered': Boolean
})

// Export the model
module.exports = mongoose.model('orders', orderSchema)