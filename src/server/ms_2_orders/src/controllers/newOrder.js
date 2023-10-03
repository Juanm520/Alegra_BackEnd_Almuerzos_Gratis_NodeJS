const order = require('../models/model.order')

async function newOrder(){
 try {
    const Order = new order({
        menu: randomizerMenu(),
        date: new Date(),
        delivered: false
    })
    return await Order.save()
 }
 catch (err) {
    return(err)
 }
}

function randomizerMenu(){
   const rulete = Math.random() * 6 + 1
   return Math.floor(rulete)
}

module.exports = newOrder