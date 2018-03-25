 
  function mapAllWords(list=[]) {
    const set = new Set();
    for (let word in list) {
      set.add(list[word]);
    }
  
    return set;
  }
  
  function randomWord(list) {
    return list[Math.floor(Math.random() * list.length)];
  }
  
  function pickWord(wordlist) {
    return randomWord(wordlist);
  }
  
  export {mapAllWords, pickWord};