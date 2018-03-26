const express = require('express');
const bodyParser = require('body-parser');
const wordSelect = require('./wordSelect');
const guess = require('./guess');
const app = express();
const PORT = 8888;

app.all('*', function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "X-Requested-With");  
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE");  
  res.header("X-Powered-By",' 3.2.1')  
  res.header("Content-Type", "application/json;charset=utf-8");  
  next();  
});

app.post("/game", (req, res) => {
  wordSelect.select();
  const result = {
    id: wordSelect.id - 1, 
    secret: wordSelect.selectMap.get(wordSelect.id - 1), 
  };
  res.send(JSON.stringify(
    result,
  ));
});

app.put("/game/:id/guessed", (req, res) => {
  res.send(JSON.stringify({
    guess: wordSelect.guess(),
  }));
});

app.get("/game/:id/:guess", (req, res) => {
  const guessWord = req.params.guess;
  const result = {
    matched: guess.commonLetter(wordSelect.selectMap.get(parseInt(req.params.id)), guessWord), 
    hasWon: guess.hasWon(wordSelect.selectMap.get(parseInt(req.params.id)), guessWord),
  }
  res.send(JSON.stringify(result));
});

app.delete("/game/:id", (req, res) => {
  wordSelect.selectMap.delete(parseInt(req.params.id));
  wordSelect.count = 0;
});

app.listen(PORT, () => {  // this will start the server waiting for incoming requests
  console.log(`Server listening at http://localhost:${PORT}`);
  console.log('use Ctrl-C to stop this server');
});