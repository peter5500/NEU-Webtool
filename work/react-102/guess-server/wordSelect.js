const wordlist = require("./wordlist");

  const wordSelect = {
    wordlist: wordlist(),
    id: 1,
    map: new Map(),
    select: function(playerPick){
      const botPick= {
        player: this.wordlist[Math.floor(Math.random() * this.wordlist.length)],
        computer: playerPick,
      };
      this.map.set(this.id, botPick);
      this.id += 1;
    }

  }
  
  module.exports = wordSelect;