export default async function postFetch(url, body){

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    }
    
    return fetch(url, options)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.error(error);
      });
}