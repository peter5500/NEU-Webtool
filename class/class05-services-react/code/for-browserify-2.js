
const baseWords = [ 'cats', 'are', 'kings', 'and', 'queens'];

const words = () => { return baseWords.map( word => word.toUpperCase() ) };


module.exports = { // without this modules that require() this file will get nothing back
  words: words,  // In modern JS we don't need to repeat an key/value pair if the variable name matches the key
  baseWords // See? same as "baseWords": baseWords
};
