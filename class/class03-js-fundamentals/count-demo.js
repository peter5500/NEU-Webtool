const guesses = [
  'TTT'
// 'STARS',
// 'TREES'
];

// const word = 'START';
const word = 'ANNEX';

function common( word, guess ) {
  let count = 0;
  const wordLetter = {};
  for(let firstLetter of word ) {
    if( !wordLetter[firstLetter] ) {
      wordLetter[firstLetter] = 0;
    }
    wordLetter[firstLetter] += 1;
  }
  console.log(wordLetter);
}

// function common( word, guess ) {
//   let count = 0;
//   for( let firstLetter of word ) {
//     for( let secondLetter of guess ) {
//       if(firstLetter === secondLetter) {
//         count += 1;
//       }
//     }
//   }
//   return count;
// }


function correct( word, guess ) {
  let count = 0;
  for( let i = 0; i < word.length; i++) {
    if(word[i] === guess[i]) {
      count += 1;
    }
  }
  return count;
}

console.log(correct(word, guesses[0]));
console.log(common(word, guesses[0]));
