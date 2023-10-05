//Get menu object.
async function getMenu(menu){
    const url = 'http://ms_menus:3001'
    const service = 'menu'
    const petition = `${url}/${service}/${menu}`
    const options = {
        method: 'GET'
    }
    try{
        const data = await fetch(petition, options)
        const menuInfo = await data.json()
        return menuInfo
    }
    catch(err){
        return err
    }
}

module.exports = getMenu
