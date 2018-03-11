export const getList = () => {
    return fetch('/wordlist')
    .then( response => response.ok ? response.json() : Promise.reject(response.text()) )
    .catch( () => Promise.reject('get-fail') );
  };

export const select = (toAppend) => {
    return fetch('/select', {
        method: 'POST',
        body: JSON.stringify( { guess: toAppend })
    })
    .then( response => response.ok ? response.json() : Promise.reject(response.text()) )
    .catch( () => Promise.reject('update-fail') );
}
  
export const guess = (id, playerGuess, computerGuess) => {
  return fetch('/guess', {
    method: 'POST',
    body: JSON.stringify( { 
      id: id,
      playerGuess: playerGuess,
      computerGuess: computerGuess,
    } )
  })
  .then( response => response.ok ? response.json() : Promise.reject(response.text()) )
  .catch( () => Promise.reject('update-fail') );
};