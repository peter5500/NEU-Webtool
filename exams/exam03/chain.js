let chain = {
  count: 0,
  
  result() {
    let temp = this.count;
    this.count = 0;
    return temp;
  },

  //will add one to count when using this
  one() {
    this.count += 1;
    return this;
  },

  //will add two to count when using this
  two() {
    this.count += 2;
    return this;
  }
}

module.exports = chain;