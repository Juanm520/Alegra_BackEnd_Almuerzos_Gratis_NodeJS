import getFetch from "./getMenus.js";

// // Obtener referencias a los botones y al tablero
// const enviarOrdenesBtn = document.getElementById('enviarOrdenesBtn');
// const historialComprasBtn = document.getElementById('historialComprasBtn');
// const ingredientesBtn = document.getElementById('ingredientesBtn');
// const ordenesNoRealizadasBtn = document.getElementById('ordenesNoRealizadasBtn');
const menu = document.getElementById('menu');

// // Evento para enviar órdenes variantes
// enviarOrdenesBtn.addEventListener('click', () => {
//   // Aquí puedes agregar la lógica para enviar órdenes
//   // Puedes mostrar mensajes o realizar otras acciones
//   alert('Órdenes variantes enviadas.');
// });

// // Evento para ir al historial de compras
// historialComprasBtn.addEventListener('click', () => {
//   // Aquí puedes redirigir a la página de historial de compras
//   // Puedes usar window.location.href para cambiar la URL
//   // window.location.href = 'historial.html';
// });

// // Evento para ir a la cantidad de ingredientes
// ingredientesBtn.addEventListener('click', () => {
//   // Aquí puedes redirigir a la página de cantidad de ingredientes
//   // window.location.href = 'ingredientes.html';
// });

// // Evento para ir a ver las órdenes no realizadas
// ordenesNoRealizadasBtn.addEventListener('click', () => {
//   // Aquí puedes redirigir a la página de órdenes no realizadas
//   // window.location.href = 'ordenes-no-realizadas.html';
// });

//Show menus
async function cargarMenus() {
  const data = await getFetch('http://localhost:3001/menus')

  const ingredientsPairs = data.map((menu) => {
    const ingredientsQty = Object.values(menu.ingredients)
    const ingredientsNames = Object.keys(menu.ingredients)
    return ingredientsNames.map((ingredient, index) => (`${ingredientsQty[index]} und de ${ingredient} `))
  })

  const menuItems = data.map((menu, index) => {
    const li = document.createElement('li')
    li.innerHTML = `<strong>${menu.code}. ${menu.name} </strong><br>- Tiempo de cocción: ${menu.cookingTime} minutos.</br> <br><i>Ingredientes:<i> ${ingredientsPairs[index]}.</br>`
    return li
  })

  menuItems.forEach((item, index) => {
    menu.appendChild(item)
  })
}

cargarMenus()
