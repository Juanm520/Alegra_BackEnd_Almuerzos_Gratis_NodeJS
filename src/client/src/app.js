import { activeOrdersView } from "./views/activeOrdersView.js";
import { foodStorageView } from "./views/foodStorage.js";
import { menuView } from "./views/menusView.js"
import { ordersView } from "./views/ordersView.js"

// // Obtener referencias a los botones y al tablero
// const enviarOrdenesBtn = document.getElementById('enviarOrdenesBtn');
const ordershistoryBtn = document.getElementById('ordershistoryBtn')
const foodstorageBtn = document.getElementById('foodstorageBtn')
const activeOrdersBtn = document.getElementById('activeOrdersBtn')
const boardNode = document.querySelector('.board')
const menuBtn = document.querySelector('#menuBtn')

menuView(boardNode, 'Menús disponibles')

// Handle active orders
activeOrdersBtn.addEventListener('click', () => {
  activeOrdersView(boardNode, 'Ordenes Activas o Pendientes')
})

// Evento para ir a la cantidad de ingredientes
foodstorageBtn.addEventListener('click', () => {
  foodStorageView(boardNode, 'Bodega de Ingredientes')
})


// Handle history button
ordershistoryBtn.addEventListener('click', () => {
    ordersView(boardNode,'Historial de ordenes')
})

// Handle menu button
menuBtn.addEventListener('click', () => {
    menuView(boardNode, 'Menús disponibles')
})







