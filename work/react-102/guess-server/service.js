const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000; 

app.use( bodyParser.json({ extended: true, type: '*/*'}));
const wordSelect = require("./wordSelect");

wordSelect.select();

function commonLetter(guess, word) {
    const tries = Array(26).fill(0);
    const target = Array(26).fill(0);
    let count = 0;
    for( let i = 0; i < 5; i++ ){
      tries[guess.charCodeAt(i) - 'A'.charCodeAt()] += 1;
    }
    for( let k = 0; k < 5; k++ ){
      target[word.charCodeAt(k) - 'A'.charCodeAt()] += 1;
    }
    for( let j = 0; j < 26; j++ ){
      if( tries[j] > 0 && target[j] > 0 ){
        count += Math.min(tries[j], target[j]);
      }
    }
    return count;
  };

app.post('/select', (req, res) => {
    wordSelect.select(req.body.guess);
    res.send(JSON.stringify(wordSelect.id - 1));
});

app.get('/wordlist', (req, res) => {
    res.send(wordSelect.wordlist);
});

app.post('/guess', (req, res) => {
    const id = req.body.id;
    const playerGuess = req.body.playerGuess;
    const computerGuess = req.body.computerGuess;
    const result = {};

    if (playerGuess.length !== 5){
        res.status(400).end();
    }
    if (!wordSelect.map.has(id)){
        res.status(400).end();
    }

    if (playerGuess === wordSelect.map.get(id).player) {
        result.win1 = true;
        result.commonLetter1 = 5;
    } else {
        result.win1 = false;
        result.commonLetter1 = commonLetter(wordSelect.map.get(id).player, playerGuess);
    }

    if (computerGuess === wordSelect.map.get(id).computer) {
        result.win1 = true;
        result.commonLetter2 = 5;
    } else {
        result.win1 = false;
        result.commonLetter2 = commonLetter(wordSelect.map.get(id).computer, computerGuess);
    }
    res.send(JSON.stringify(result));
});

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}$`);
    console.log(`use Ctrl-C to stop this server`);
});