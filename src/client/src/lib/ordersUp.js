import postFetch from "./postFetch";

async function addOrders(qty){
  //If there are only one order
  if(qty < 2){
    const data = await postFetch('http://localhost:3003/orders_up', {})
    return data
  }
}