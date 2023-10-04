const getMenu = require('./getMenu')
const getIngredientsInfo = require('./getIngredientsInfo')

async function processOrder(order){
    const menu = await getMenu(order)

    if (isAvalibleInFoodstarage){
        return new Promise(async (resolve, reject) => {
            try {
            setTimeout(async () =>{
                const requires = await requireIngredients(order)
                
            }, menu.cookingTime * 100)
            } 
            catch(err){
                reject(err)
            }
        })
    }
}

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
async function requireIngredients({ menu }){
    //Get menu data
    const objMenu = await getMenu(menu)
    //Declare array to build a matrix to return
    let ingredients = []
    //Get the keys (names of each ingredient) to iterate
    const ingredientsNames = Object.keys(objMenu.ingredients)
    //Build the matrix
    ingredientsNames.forEach( ingredient => {
        //Push each ingredient and ther quantity
        ingredients.push([ingredient, objMenu.ingredients[ingredient]])
    })

    return ingredients
}
