import postFetch from "./postFetch";

async function addOrders(qty, ){
  //To append info
  //To info
  const info = document.createElement('h5')
  //If there are only one order
  if(qty < 2){
    const data = await postFetch('http://localhost:3003/orders_up', {})
    info.innerText = 'data'
    return info.appendChild()
  }
}