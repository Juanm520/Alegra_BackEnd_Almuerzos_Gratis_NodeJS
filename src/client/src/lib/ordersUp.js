import postFetch from "./postFetch.js"

async function addOrders(qty, infoNode, buttonNode, qtySelector){
  //To append info and add classes
  const info = document.createElement('h5')
  info.classList.add('infobanner')
  infoNode.classList.add('infoanimation')

  //Disable submit button
  buttonNode.setAttribute('disabled', '')

  //If there is only one order
  if(qty < 2){
    const data = await postFetch('http://ms_orders:3002/new_order', {})
    info.innerText = `Orden agregada a la cola con el id ${data._id}.`
    //Final frontend operations
    buttonNode.removeAttribute('disabled')
    qtySelector.value = '1'
    infoNode.lastChild.remove()
    infoNode.appendChild(info)
    return setTimeout (()=>infoNode.classList.remove("infoanimation"), 2000)
  }
  //If there are more than one order
  for (let order = 0; order < qty; order++) {
    await postFetch('http://ms_orders:3002/new_order', {})
  }
  info.innerText = `${qty} ordenes agregadas a la cola.`

  //Final frontend operations
  buttonNode.removeAttribute('disabled')
  qtySelector.value = '1'
  infoNode.lastChild.remove()
  infoNode.appendChild(info)
  return setTimeout (()=>infoNode.classList.remove("infoanimation"), 2000)
}

export { addOrders }