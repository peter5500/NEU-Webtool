// run me with `node simple-service.js`

const express = require('express');
const app = express();
const PORT = 3000;  // all caps indicates an actual constant

app.use(express.static('public')); // serve any assets by their path under 'public' directory

app.get('/hello', (request, response) => { // the HTTP verb and path to respond to
  // this callback function is called when a request comes
  // this callback is passed two objects, relating to the incoming HTTP Request and outgoing HTTP Response

  response.send('Hello World'); // Once the response is done, you can't try to add to it
});

app.get('/more', (req, resp) => { // conventional shorter variables
  let remaining = req.query.count || 10; // get query parameters
  let output = '';
  while(remaining) {
    output += `${remaining} `;
    remaining--;
  }
  resp.send(output);
});

app.get('/data', (req, resp) => {
  const demo = {
    example: 'will need to use JSON.parse()',
    cats: 'are cool',
    power: 9001
  };
  resp.send(JSON.stringify(demo));
});

// notice the above commands simply store callbacks to run at the appropriate time, the callbacks have not actually run yet

app.listen(PORT, () => {  // this will start the server waiting for incoming requests
  console.log(`Server listening at http://localhost:${PORT}`);
  console.log('use Ctrl-C to stop this server');
});
