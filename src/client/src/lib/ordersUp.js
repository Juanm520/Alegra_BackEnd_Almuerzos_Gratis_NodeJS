import postFetch from "./postFetch.js"

async function addOrders(qty, infoNode, buttonNode, qtySelector){
  //To append info
  const info = document.createElement('h5')
  info.classList.add('infobanner')

  //Disable submit button
  buttonNode.setAttribute('disabled', '')

  //If there is only one order
  if(qty < 2){
    const data = await postFetch('http://localhost:3002/new_order', {})
    console.log(data)
    info.innerText = `Orden agregada a la cola con el id ${data._id}.`
    //Final frontend operations
    buttonNode.removeAttribute('disabled')
    qtySelector.value = '1'
    infoNode.lastChild.remove()
    return infoNode.appendChild(info)
  }
  //If there are more than one order
  for (let order = 0; order < qty; order++) {
    await postFetch('http://localhost:3002/new_order', {})
  }
  info.innerText = `${qty} ordenes agregadas a la cola.`

  //Final frontend operations
  buttonNode.removeAttribute('disabled')
  qtySelector.value = '1'
  infoNode.lastChild.remove()
  return infoNode.appendChild(info)
}

export { addOrders }