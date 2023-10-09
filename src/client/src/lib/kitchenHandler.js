import postFetch from "./postFetch.js";

const host = process.env.HOST
export async function stopKitchen(infoKitchen, stopBtn, submintBtn){
    await postFetch(`http://${host}:3004/stop_kitchen`, {})
    submintBtn.setAttribute('disabled', '')
    infoKitchen.innerText = 'La cocina ha sido detenida, refresque la pagina para seguir preparando las ordenes pendientes.'
    return stopBtn.setAttribute('disabled', '')
}

export async function startKitchen(){
    return await postFetch(`http://${host}:3004/start_kitchen`, {})
}


    