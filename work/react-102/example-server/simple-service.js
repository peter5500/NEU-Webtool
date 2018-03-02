// run me with `node simple-service.js`

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;  // all caps indicates an actual constant

const listCode = require('./listCode');

app.use( express.static('public') ); // serve any assets by their path under 'public' directory
app.use( bodyParser.json({ extended: true, type: '*/*' }) );


// These endpoints are not RESTful.  The biggest issue is that the URLs aren't resources
app.get('/defaultList', (request, response ) =>  {
  response.send( JSON.stringify(listCode.all()) );
});

// In addition to URL difference, a REST request would have an update operation use PUT
app.post('/updateList', (request, response) => {
  listCode.update( request.body.value );
  response.send( JSON.stringify( listCode.all() ));
});

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

// for the fetch examples

app.get('/byMethod', (req, resp) => {
  const name = req.query.name;
  const choice = req.query.choice;
  // Above could have been: const { name, choice } = req.query;

  if(name === 'error') {
    resp.status(500).end();
  } else {
    resp.send( JSON.stringify({
      sawMethod: 'GET',
      sawName: name,
      sawChoice: choice
    }) );
    // Above could have been: resp.json({...}); with appropriate object
  }
});

app.post('/byMethod', (req, resp) => {
  const name = req.body.name;
  const choice = req.body.choice;
  // Above could have been: const { name, choice } = req.body;
  if(name === 'error') {
    resp.status(500).end();
  } else {
    resp.json({
      sawMethod: 'POST',
      sawName: name,
      sawChoice: choice
    });
  }
});


// notice the above commands simply store callbacks to run at the appropriate time, the callbacks have not actually run yet

app.listen(PORT, () => {  // this will start the server waiting for incoming requests
  console.log(`Server listening at http://localhost:${PORT}`);
  console.log('use Ctrl-C to stop this server');
});
