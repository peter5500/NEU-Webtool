const wordSelect = require("./wordSelect");

const guess = {

    commonLetter: function(guess, word) {
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
      },
    
    hasWon: function(guess, word) {
        if (word === guess) {
            return true;
        } else {
            return false;
        }
    }

}

  module.exports = guess;