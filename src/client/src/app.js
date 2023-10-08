import { activeOrdersView } from "./views/activeOrdersView.js";
import { foodStorageView } from "./views/foodStorage.js";
import { menuView } from "./views/menusView.js"
import { ordersView } from "./views/ordersView.js"
import { addOrders } from "./lib/ordersUp.js"
import { startKitchen, stopKitchen }from "./lib/kitchenHandler.js";

// // Obtener referencias a los botones y al tablero
const submitBtn = document.getElementById('submit')
const qtySelector = document.getElementById('qty')
const infoNode = document.querySelector('.info')
const boardNode = document.querySelector('.board')
const ordershistoryBtn = document.getElementById('ordershistoryBtn')
const foodstorageBtn = document.getElementById('foodstorageBtn')
const activeOrdersBtn = document.getElementById('activeOrdersBtn')
const menuBtn = document.querySelector('#menuBtn')
const infoKitchen = document.querySelector('.infokitchen')
const stopBtn = document.querySelector('#stopBtn')

menuView(boardNode, 'Menús disponibles')
// startKitchen()

//Handle submit button
submitBtn.addEventListener('click', () => {
  const qty = qtySelector.value
  addOrders(qty, infoNode, submitBtn, qtySelector)
})


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

// Handle stop kitchen button
stopBtn.addEventListener('click', () => {
    stopKitchen(infoKitchen, stopBtn, submitBtn)
})







