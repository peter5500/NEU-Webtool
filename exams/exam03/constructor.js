function constructor(word) {
  this.word = word;
}

constructor.prototype.getWord = function() {
  return this.word;
}

module.exports = constructor;