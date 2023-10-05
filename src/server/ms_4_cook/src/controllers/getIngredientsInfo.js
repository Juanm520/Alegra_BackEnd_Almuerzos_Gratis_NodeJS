//Get ingredients info.
async function getIngredientesInfo(){
    const url = 'http://ms_update_food_storage:3003'
    const service = 'ingredients_info'
    const petition = `${url}/${service}`
    const options = {
        method: 'GET'
    }
    try{
        const data = await fetch(petition, options)
        const ingredientsInfo = await data.json()
        return ingredientsInfo
    }
    catch(err){
        return err
    }
}

module.exports = getIngredientesInfo