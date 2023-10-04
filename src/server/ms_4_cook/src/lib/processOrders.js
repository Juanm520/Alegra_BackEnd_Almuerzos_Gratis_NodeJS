const getMenu = require('../controllers/getMenu')
const { validateIngredients, requireIngredients,missingIngredients } = require('../lib/processIngredients')
const processOrder = require('./processOrder')
const newBuy = require('../controllers/buyIngredient')

//Process the orders to delivering
async function processOrders(orders){
    //Iterate the active orders 
    return orders.map(async order => {
      //Get the menu properties.
      const menuInfo = await getMenu(order.menu)
      //Create array matrix ingredient x quantity of ech ingredient
      const ingredientsRequiered = requireIngredients(menuInfo)
      //Validate if the ingredients are avalibles
      const isValidate = await validateIngredients(ingredientsRequiered)
      //Start processOrder is is validate
      if(isValidate){
          try {
            return await processOrder(order)
          } 
          catch (err) {
            return err
          }
      }
      //Buy ingredients if is not validate
      else {
        //Define the missing ingredients
        const ingredientsToBuy = await missingIngredients(ingredientsRequiered)
        //Buy the ingredient
        return ingredientsToBuy.map( async ingredientMatrix => {
          //Simulate the shipping delay
          setTimeout( async () => {
            try {
              return await newBuy(ingredientMatrix[0])
            } 
            catch (err) {
              return err
            }
          }, 2000)
        })
      }
    })
}

module.exports = processOrders



