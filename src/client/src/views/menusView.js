import getFetch from "../lib/getFetch.js"
import { setupBoard } from "../lib/setupBoard.js";

const host = process.env.HOST
//Show menu's table
async function menuView(boardNode, title) {
    const data = await getFetch(`http://${host}:3001/menus`)
    //clean board
    setupBoard(boardNode, title)
    //Create ol to append li
    const menuNode = document.createElement('ol')

    //Prepare the data
    const ingredientsPairs = data.map((menu) => {
      const menuIngredients = Object.entries(menu.ingredients)
      return menuIngredients.map(ingredient => (`${ingredient[0]} und de ${ingredient[1]} `))
    })
  
    const menuItems = data.map((menu, index) => {
      const li = document.createElement('li')
      li.innerHTML = `<strong>${menu.code}. ${menu.name} </strong><br>- Tiempo de cocción: ${menu.cookingTime} minutos.</br> <br><i>Ingredientes:</i> ${ingredientsPairs[index]}.</br>`
      return li
    })

    //Append the items
    menuItems.forEach((item) => {
      menuNode.appendChild(item)
    })
    
    //Add style
    menuNode.classList.add('menu')

    return boardNode.appendChild(menuNode)
  }

export { menuView }