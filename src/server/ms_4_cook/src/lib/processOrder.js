const getMenu = require('../controllers/getMenu')
const updateFoodStorage = require('../controllers/updateFoodStorage')
const changeDeliveredStatus = require('../controllers/changeDeliveredStatus')

async function processOrder(order){
    //Process the order
    return new Promise(async (resolve, reject) => {
        try {
        //To get cookingTime delay.
        const menuInfo = await getMenu(order.menu)
        //Update the food_storage with the quantity of ingredients spends.
        await updateFoodStorage(order)
        //Simulated the cooking delay.
        setTimeout( async () => {
            //Delivered the order and change the status of delivered
            await changeDeliveredStatus(order)
            resolve('delivered')
        }, menuInfo.cookingTime * 200)
        } 
        catch(err){
            reject(err)
        }
    })
}

module.exports = processOrder
