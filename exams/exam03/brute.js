const brute = (fromBruteForce, basis) => {
  
  fromBruteForce.init = function(word) {
    basis.init.call(this, word);
  }

  fromBruteForce.getWord = function() {
    return basis.getWord.call(this);
  }
  
}

module.exports = brute;