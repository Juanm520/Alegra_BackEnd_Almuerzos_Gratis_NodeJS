const order = require('../models/model.order')

async function orders (){
 try {
    const Orders = await order.find()
    return await Orders
 }
 catch (err) {
    return(err)
 }
}

module.exports = orders