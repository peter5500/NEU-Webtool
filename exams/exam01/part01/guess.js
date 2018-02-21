// ( () => {
//     const tasks = [];
  
//     function render() {
//       document.querySelector('.output ul').innerHTML = generateList();
//     }
  
//     function generateList() {
//       const list = tasks.map( (element, index) => `<li data-item="${index}">${element}` ).join('\n');
//       return list;
//     }
// 
//     function addToList(task) {
//       tasks.push(task);
//       render();
//     }
  
//     function getNewTask() {
//       return document.querySelector('.new-task').value;
//     }
  
//     function addTask() {
//       addToList(getNewTask());
//     }
  
//     function addAddListener() {
//       document.querySelector('.add').addEventListener('click', addTask);
//     }
    
//     function toggleComplete(event) {
//       event.target.classList.toggle('complete');
//       console.log(event.target.dataset.item);
//     }
// const tasks = [  'Guessing...' ];
  
// function render() {
//   document.querySelector('.pre-guess ul').innerHTML = generateList();
// }

// function generateList() {
//   const list = tasks.map( (element, index) => `<li data-item="${index}">${element}</li>` ).join('\n');
//   return list;
// }

// function addToList(task) {
//   tasks.push(task);
//   render();
// }

// function getNewTask() {
//   return document.querySelector('.text').value ;
// }

// function addTask() {
//   addToList(getNewTask());
// }

// function addAddListener() {
//   document.querySelector('.button').addEventListener('click', addTask);
// }
    
//     addAddListener();
//     render();
//   })();

// var randomNumber = Math.floor(Math.random()*wordlist.length);

// const wordInfo = {
//     wordlist: wordlist()
//   };

//   wordInfo.word = pickWord(wordInfo.wordlist);
  
const wordInfo = {
  allWords: wordlist
};

const history = {
  result: [],
  count: 0
};

reset();

function randomWord(list) {
  return list[Math.floor(Math.random()*list.length)];
}

function pickWord(wordList) {
  return randomWord(wordInfo.allWords);
}

function showHistory() {
  document.getElementById('guessHistory').innerHTML = '';
  for (let pre in history.result) {
    if (pre == 0) {
      document.getElementById('guessHistory').innerHTML += history.result[pre];
    } else {
      document.getElementById('guessHistory').innerHTML += '\n' + history.result[pre];
    }
    
  }
}

function showTurn() {
  document.getElementById('count-turn').innerHTML = history.count;
  if (history.count == 0 || history.count == 1) {
    document.querySelectorAll('span')[2].innerHTML = 'turn!'
  } else {
    document.querySelectorAll('span')[2].innerHTML = 'turns!'
  }
}

function reset() {
  history.result = [];
  history.count = 0;
  wordInfo.word = pickWord(wordInfo.allWords);
  document.getElementsByTagName('button')[0].innerHTML = 'Guess';
  document.getElementsByTagName('button')[0].disabled = true;
  addEventListener();
  showHistory();
  showTurn();
}

function checkInputWord() {
  let input = document.getElementsByTagName('input')[0];
  if (wordInfo.word === input.value.toUpperCase()) {
    document.getElementsByTagName("button")[0].innerHTML = 'Reset';
    document.getElementsByTagName("button")[0].disabled = false;
    addEventListener();
  }
  let output = input.value + ", and you got " + compare(input.value.toUpperCase(),wordInfo.word)
                + " in common.";
  history.result.push(output);

  history.count += 1;
  showHistory();
  showTurn();
  input.value = '';
}

function compare(guess, word){
  const base = wordInfo.word;
  const tries = Array(26).fill(0);
  const target = Array(26).fill(0);
  var count = 0;
  var result = {};
  result.won = false;
  for( let i = 0; i < base.length; i++ ){
    tries[guess.charCodeAt(i) - 'A'.charCodeAt()] += 1;
  }
  for( let k = 0; k < base.length; k++ ){
    target[base.charCodeAt(k) - 'A'.charCodeAt()] += 1;
  }
  for( let j = 0; j < 26; j++ ){
    if( tries[j] > 0 && target[j] > 0 ){
      count += Math.min(tries[j], target[j]);
    }
  }
  return count;
}

function guess() {
  document.getElementsByTagName('button')[0].disabled = true;
  checkInputWord();
}

function checkValidation(event) {
  if (event.target.value.length == 5) {
    document.getElementsByTagName('button')[0].disabled = false;
    } else {
    document.getElementsByTagName('button')[0].disabled = true;
  }
}

document.getElementById("text")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("button").click();
    }
  }); 

function addEventListener() {
  let button = document.getElementsByTagName('button')[0];
  if (button.innerHTML === 'Guess') {
    button.removeEventListener("click", reset);
    button.addEventListener("click", guess);
  } else if (button.innerHTML === 'Reset') {
    button.removeEventListener("click", guess);
    button.addEventListener("click", reset);
  }
  
  document.getElementsByTagName('input')[0].addEventListener("change", checkValidation);
}
