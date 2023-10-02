const menu = require('../models/model.menu')

async function allMenus (){
 try {
    const menus = await menu.find()
    return menus
 }
 catch {
    console.log('error')
 }
}

async function menuByCode( code ){
    try {
        const query = menu.where({code: code})
        const menuSnapshot = await menu.findOne(query)
       return menuSnapshot
    }
    catch {
       console.log('error')
    }
   }

module.exports = { 'allMenus': allMenus,
                   'menuByCode': menuByCode 
                 }