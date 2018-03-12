(()=> {
  // An example that has it all in one place
  // this is NOT the way you want to do it
  // though it may be okay to be more than this and less than full example
  document.querySelector('.info6250 .submit-simple').addEventListener('click', () => {
    fetch('/byMethod', { method: 'POST', body: JSON.stringify( {
      name: document.querySelector('.info6250 .name').value,
      choice: document.querySelector('.info6250 .cats').value
    }) })
    .then( response => response.ok ? response.json() : Promise.reject(response.status) )
    .then( fromJson => {
      document.querySelector('.info6250 .status').innerHTML =
        `bare bones call used ${fromJson.sawMethod} and the Service saw 'name' as '${fromJson.sawName}' and 'choice' as '${fromJson.sawChoice}'`;
    })
    .catch( () => {
      document.querySelector('.info6250 .status').innerHTML = `<span class="error">Call failed</span>`;
    });
  });

})();
