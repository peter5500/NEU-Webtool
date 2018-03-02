export const getList = () => {
  return fetch('/defaultList')
  .then( response => response.ok ? response.json() : Promise.reject(response.text()) )
  .catch( () => Promise.reject('get-fail') );
};

export const update = (toAppend) => {
  return fetch('/updateList', {
    method: 'POST',
    body: JSON.stringify( { value: toAppend } )
  })
  .then( response => response.ok ? response.json() : Promise.reject(response.text()) )
  .catch( () => Promise.reject('update-fail') );
};
