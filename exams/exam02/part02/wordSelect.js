const wordlist = require("./wordlist");

const wordSelect = {
    wordlist,
    id: 0,
    selectMap: new Map(),
    count: 0,

    select: function() {
      let selectWord = this.wordlist[ Math.floor( Math.random() * this.wordlist.length ) ];
      this.selectMap.set(this.id, selectWord);
      this.id += 1;

    
      this.count = 0;
    },
  
    guess: function() {
        const guessWord = this.wordlist[this.count];
        this.count++;
        return guessWord;
    },

  }

  
  module.exports = wordSelect;