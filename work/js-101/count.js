const guesses = [
    'TREES', 'TEASE', 'START', 
    'STRAP', 'LEVEL', 'PARTS'
];

const base_word = 'PARTS';

function correct( base_word, guesses ) {
    let count = 0;
    for( let i = 0; i < base_word.length; i++) {
      if( base_word[i] === guesses[i] ) {
        count += 1;
      }
    }
    return count;
}

function common( base_word, guesses ){
    let base = Array(26).fill(0);
    let guess = Array(26).fill(0);
    let count = 0;
    for( let i = 0; i < base_word.length; i++ ){
      base[base_word.charCodeAt(i) - 'A'.charCodeAt()] += 1;
    }
    for( let k = 0; k < guesses.length; k++ ){
      guess[guesses.charCodeAt(k) - 'A'.charCodeAt()] += 1;
    }
    for( let j = 0; j < 26; j++ ){
      if( base[j] > 0 && guess[j] > 0 ){
        count += Math.min(base[j], guess[j]);
      }
    }
    return count;
}

console.log('Same position:');
console.log(correct(base_word, guesses[0]));
console.log(correct(base_word, guesses[1]));
console.log(correct(base_word, guesses[2]));
console.log(correct(base_word, guesses[3]));
console.log(correct(base_word, guesses[4]));
console.log(correct(base_word, guesses[5]));

console.log('\nSame letters:');
console.log(common(base_word, guesses[0]));
console.log(common(base_word, guesses[1]));
console.log(common(base_word, guesses[2]));
console.log(common(base_word, guesses[3]));
console.log(common(base_word, guesses[4]));
console.log(common(base_word, guesses[5]));


  