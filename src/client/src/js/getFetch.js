export default async function getFetch(url){
    return fetch(url)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.error(error);
      });
}

