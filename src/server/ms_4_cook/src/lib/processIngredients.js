const getIngredientsInfo = require('../controllers/getIngredientsInfo')

//Process to validate the quantities of ingredients. Boolean true if all are avalible.
async function validateIngredients(ingredientsMatrix){
    //Get the info of the food_storage
    const ingredientsInfo = await getIngredientsInfo().then(res => res.ingredients_info)
    //Mapping each matrix's element to validate quantities.
    const mapping = ingredientsMatrix.map( matrix => {
        //Find ingredient in the list
        const ingredientToValidate = ingredientsInfo.find(ingredient => matrix[0] === ingredient.ingredient)
        //Return inf the quantity is less or more
        return matrix[1] <= ingredientToValidate.quantity
    })
    //Return false if some ingredient in not avalible
    return mapping.every( avalible => avalible )
}

//Process validate the ingredients of the menu
function requireIngredients(menuInfo){
    //Declare array to build a matrix to return
    let ingredients = []
    //Get the keys (names of each ingredient) to iterate
    const ingredientsNames = Object.keys(menuInfo.ingredients)
    //Build the matrix
    ingredientsNames.forEach( ingredient => {
        //Push each ingredient and ther quantity
        ingredients.push([ingredient, menuInfo.ingredients[ingredient]])
    })
    //Return matrix [[ingredient, quantity],[]...]
    return ingredients
}

//Process to validate the quantities of ingredients. Boolean true if all are avalible.
async function missingIngredients(ingredientsMatrix){
    //Get the info of the food_storage
    const ingredientsInfo = await getIngredientsInfo().then(res => res.ingredients_info)
    //Mapping each matrix's element to validate quantities.
    const filtering = ingredientsMatrix.filter( matrix => {
        //Find ingredient in the list
        const ingredientToValidate = ingredientsInfo.find(ingredient => matrix[0] === ingredient.ingredient)
        //Return if the quantity is less or more
        return matrix[1] > ingredientToValidate.quantity
    })
    //Return array matrix of missing ingredients
    return filtering
}

module.exports = { requireIngredients, validateIngredients, missingIngredients }