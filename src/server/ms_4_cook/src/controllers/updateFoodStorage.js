const { requireIngredients } = require('../lib/processIngredients')
const getMenu = require('./getMenu')

async function updateFoodStorage(order){
    const menuIngredients = await getMenu(order.menu)
    const ingredientsQuantities = requireIngredients(menuIngredients)
    
    const promises = ingredientsQuantities.map(async matrix => {
        const url = 'http://localhost:3003'
        const service = 'ingredient_update'
        const petition = `${url}/${service}`
        const body = { ingredient: matrix[0], quantity: -matrix[1] }
        const options = {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        }
        const data = await fetch(petition, options)
        return await data.json()
    })

    try {
        const fetching = await Promise.all(promises)
        return fetching
    }
    catch(err){
        return err
    }
}

module.exports = updateFoodStorage