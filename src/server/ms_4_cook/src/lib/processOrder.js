const getMenu = require('../controllers/getMenu')
const { validateIngredients, requireIngredients,missingIngredients } = require('./processIngredients')
const deliverOrder = require('./deliverOrder')
const { buyIngredientList } = require('../controllers/buyIngredient')

//Process the orders to delivering
async function processOrder(order){
      //Get the menu properties.
      const menuInfo = await getMenu(order.menu)
      //Create array matrix ingredient x quantity of each ingredient
      const ingredientsRequiered = requireIngredients(menuInfo)
      //Validate if the ingredients are avalibles
      const isValidate = await validateIngredients(ingredientsRequiered)
      //Start processOrder is is validate
      if(isValidate){
          try {
          //Deliver the order
            return await deliverOrder(order)
          } 
          catch (err) {
            return err
          }
      }
      //Buy ingredients if is not validate
      else {
        //Define the missing ingredients
        const ingredientsToBuy = await missingIngredients(ingredientsRequiered)
        //Buy the ingredient's list
        return await buyIngredientList(ingredientsToBuy)
      }
  }

module.exports = processOrder



