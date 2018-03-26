export const start = (url) => {
    return fetch (url + "/game", {
      method: 'POST',
      body: {},
    })
    .then( response => response.ok ? response.json() : Promise.reject(response.text()) )
    .catch( () => Promise.reject('get-fail') );
}

export const getGuess = (url, id, matched) => {
    return fetch(url + "/game/" + id + "/guessed", {
      method: 'PUT',
      body: matched,
    })
    .then( response => response.ok ? response.json() : Promise.reject(response.text()) )
    .catch( () => Promise.reject('get-fail') );
  }
  
export const getCommon = (url, id, guess) => {
    return fetch(url + "/game/" + id + "/" + guess)
    .then( response => response.ok ? response.json() : Promise.reject(response.text()) )
    .catch( () => Promise.reject('get-fail') );
  }
  
export const reset = (url, id) => {
    return fetch(url + "/game/" + id, {
      method: 'DELETE',
    })
    .then( response => response.ok ? response.json() : Promise.reject(response.text()) )
    .catch( () => Promise.reject('get-fail') );
  }