const wordlist = `
about other which their there first would these click price
state email world music after video where books links years
order items group under games could great hotel store terms
right local those using phone forum based black check index
being women today south pages found house photo power while
three total place think north posts media water since guide
board white small times sites level hours image title shall
class still money every visit tools reply value press learn
print stock point sales large table start model human movie
march yahoo going study staff again april never users topic
below party login legal above quote story rates young field
paper girls night texas poker issue range court audio light
write offer given files event china needs might month major
areas space cards child enter share added radio until color
track least trade david green close drive short means daily
beach costs style front parts early miles sound works rules
final adult thing cheap third gifts cover often watch deals
words linux james heart error clear makes india taken known
cases quick whole later basic shows along among death speed
brand stuff japan doing loans shoes entry notes force river
album views plans build types lines apply asked cross weeks
lower union names leave teens woman cable score shown flash
ideas allow homes super asian cause focus rooms voice comes
brown forms glass happy smith thank prior sport ready round
built blood earth nokia italy basis award peter extra rated
quite horse stars lists owner takes bring input agent valid
grand trial units wrote ships metal funds guest seems trust
multi grade panel floor match plant sense stage goods maybe
spain youth break dance apple enjoy block civil steel songs
fixed wrong hands paris fully worth peace coast grant agree
blogs scale stand frame chief gives heard begin royal clean
bible suite vegas chris piece sheet seven older cells looks
calls whose naked lives stone tests buyer steve label scott
canon waste chair phase motor shirt crime count claim patch
santa alone jones saint drugs joint fresh dates upper prime
limit began louis steps shops creek urban tours labor admin
heavy solid theme touch goals serve magic mount smart latin
avoid birth virus abuse facts faith chain moved reach sorry
gamma truth films owned draft chart jesus clubs equal codes
kinds teams funny tried named laser harry taxes mouse brain
dream false falls stats carry hello clips brief ended eight
wants alert queen sweet diego truck votes ocean signs depth
train feeds route frank anime speak query rural judge bytes
fight filed korea banks kelly leads brian miami wales minor
noted spent davis helps cycle sleep scene drink intel rings
henry guess ahead devel delta cisco alpha bonus adobe trees
dress refer babes layer spend clock ratio proof empty maine
ideal specs parks cream boxes hills aware shape irish firms
usage mixed exist wheel angel width noise array greek sharp
occur knows coach kevin plate logic sizes plain costa trail
buddy setup blues scope crazy bears mouth meter fruit mysql
lewis sugar stick allen genre slide exact bound storm micro
dolls paint delay pilot czech novel ultra idaho plays truly
lodge broad swiss sarah clark foods guard newly raise drama
bands lunch audit polls tower yours jason shell solar catch
doubt tasks const doors forth bruce split twice egypt shift
simon marks loved birds saved shots moore treat piano risks
ports teach rapid hairy dutch boots holds pulse metro strip
pearl heads logos honda bills opera asset blank humor lived
tight meant plane meets tampa grace susan adams villa inner
roman taste trips sides turns cache lease proud giant seats
alarm usual angle vinyl worst honor eagle pants nurse quiet
comic crown maker crack picks smoke craft apart blind coins
gross epson actor finds fifth prize dirty wayne alive prove
wings ridge modem larry skill moves throw trend rhode worse
boats tells fiber graph talks bonds fraud roger crash inter
grove spray roads faces mayor yield hence radar lakes diary
kings flags baker shock walls ebony drawn beast dodge pizza
yards woods jokes twiki globe dicke kerry ghost pride keith
linda chile maria brass plaza quest trans booty acres venue
vital excel modes enemy wells opens lucky thick iraqi vista
chips terry flood arena grown jerry smile lands armed laura
tokyo nikon candy pills tiger folks boost icons moral keeps
pound roses bread tough gonna chest billy craig solve nancy
tones sight towns worry reads roles glory saudi fault karen
jimmy rugby fluid barry devil grass marie kenya sized manga
theft swing dated shoot elite poems robot winds gnome roots
noble shore loves loose slots rocks genes hosts atlas feels
ralph corps liver decor texts evans fails aging alice intro
clerk mills jeans fonts favor sigma xhtml aside essay camps
aaron trace packs spoke arrow rough weird holes blade meals
robin strap crowd cloud valve knife shelf liked adopt fotos
outer tales islam nodes seeds cited skype tired steam acute
stood carol stack curve amber trunk waves camel lamps juice
chase sauce beads flows fewer proxy lanka voted bikes gates
slave lycos zdnet combo haven charm basin ranch drunk toner
latex delhi alien broke nepal nylon discs rocky fleet bunch
cents omega civic saver grill grain wanna seeks gains spots
salon turbo thats aimed reset brush spare kodak skirt honey
gauge faced sixth farms cheat sandy macro laugh pitch autos
perry dozen teeth cloth stamp lotus cargo salem likes tapes
zones races maple depot blend julie janet phpbb probe helen
lopez debug chuck ebook bingo minds xanax sunny leeds cedar
blair hopes mason burns pumps mario utils pairs chose blast
tommy brake congo olive cyber clone dicks relay tears oasis
angry lover rolls malta daddy ferry omaha loads motel rally
dying stuck stops vocal organ lemon toxic bench rider butts
bobby sheep wines salad paste katie relax sword sells coral
pixel float colin paths acids dairy admit fancy samoa squad
wages males chaos wheat bases unity bride begun socks essex
fever drums rover flame tanks spell emily annex sudan hints
wired elvis argue arise jamie chess oscar menus canal amino
herbs lying drill bryan hobby tries trick myers drops wider
screw blame fifty uncle jacob randy brick naval donna cabin
eddie fired perth syria klein tires retro anger suits glenn
handy crops guild tribe batch alter ghana edges twins amend
chick thong medal walks booth indie bones breed polar msgid
carey danny patio lloyd beans ellis snake julia berry ought
fixes sends mazda timer tyler verse highs ellen racks nasty
tumor watts forty tubes floyd queue skins exams welsh belly
haiti elder sonic thumb twist ranks debut volvo penny ivory
remix alias newer spice ascii donor trash manor diane disco
endif minus milan shade digit lions pools lyric grave howto
devon saves lobby punch gotta karma betty lucas mardi shake
holly silly mercy fence diana shame fatal flesh jesse qatar
sheer witch cohen puppy kathy smell satin promo tunes lucia
nerve renew locks euros rebel hired hindu kills slope nails
whats rides rehab merit disks condo fairy shaft casio kitty
drain monte fires panic leone onion beats merry scuba verde
dried derby annie derek steal fears tuner alike sagem scout
dealt bucks badge wrist heath lexus realm jenny yemen buses
rouge yeast kenny yukon singh brook wives xerox sorts vsnet
papua armor viral pipes laden aruba merge edgar dubai allan
sperm filme craps frost sally yacht tracy whale shark grows
cliff tract shine wendy diffs ozone pasta serum swift inbox
focal samba wound belle cindy lined boxed cubic spies elect
bunny chevy tions flyer baths emacs climb sparc dover token
kinda dylan belts burke clara flush hayes moses johns jewel
teddy dryer ruled funky joins scary mpegs cakes mixer sbjct
tooth stays drove upset mines logan lance colon lanes purse
align bless crest alloy plots tulsa casey draws bloom loops
surge tahoe souls spank vault wires mails blake orbit niger
bacon paxil spine trout apnic fatty joyce marco isaac oxide
badly scoop sanyo blink carlo tiles tamil fuzzy grams forge
dense brave awful meyer wagon knock peers quilt notre mambo
flour choir blond burst wiley fibre daisy crude bored allah
fares hoped safer marsh ricky theta stake arbor
`.split(/ |\n/g).map( word => word.toUpperCase() ).filter( word => word );

function compare(guess, word){
    const tries = Array(26).fill(0);
    const target = Array(26).fill(0);
    var count = 0;
    for( let i = 0; i < 5; i++ ){
      tries[guess.charCodeAt(i) - 'A'.charCodeAt()] += 1;
    }
    for( let k = 0; k < 5; k++ ){
      target[word.charCodeAt(k) - 'A'.charCodeAt()] += 1;
    }
    for( let j = 0; j < 26; j++ ){
      if( tries[j] > 0 && target[j] > 0 ){
        count += Math.min(tries[j], target[j]);
      }
    }
    return count;
  }

  // const tasks = [  'No guesses made' ];

  const wordInfo = {
    allWords: mapAll(wordlist)
  };
    
  const history = {
      playerResult: [],
      computerResult: [],
      count: 0
  };

  let statusMessage = document.getElementsByClassName("status-message")[0];

reset();
function resetButton() {
  document.getElementsByTagName("button")[0].disabled = true;
  document.getElementsByTagName("button")[1].disabled = true;
  document.getElementsByTagName("button")[0].hidden = false;
  document.getElementsByTagName("button")[1].hidden = true;
  document.getElementsByTagName("button")[2].hidden = true;
}

function reset() {
  history.count = 0;
  history.playerResult = [];
  history.computerResult = [];
  wordInfo.word1 = "";
  wordInfo.word2 = "";
  document.getElementById("player").innerHTML = "No guesses made";
  document.getElementById("computer").innerHTML = "No guesses made";
  resetButton();
  addEventListener();
  statusMessage.innerHTML = "Enter a common 5 letter word for them to guess";
}

function begin(event) {
  event.target.hidden = true;
  document.getElementsByTagName("button")[1].hidden = false;
  wordInfo.word2 = document.getElementsByTagName("input")[0].value.toUpperCase();
  document.getElementsByTagName("input")[0].value = "";
  console.log(wordInfo.word2);
  wordInfo.word1 = pickWord(wordlist);
  console.log(wordInfo.word1);
  statusMessage.innerHTML = "Enter a common 5 letter word to guess";
}

function computerTurn() {
  computerResult = {};
  computerResult.guess = pickWord(wordlist);
  history.computerResult.push(computerResult);
  computerResult.similarity = compare(computerResult.guess, wordInfo.word2);
  document.getElementsByClassName("pre-guess")[0].innerHTML = history.computerResult[history.computerResult.length - 1].guess;
  if (computerResult.guess === wordInfo.word2) {
    event.target.hidden = true;
    statusMessage.innerHTML = `Computer wins in ${history.count} turns`;
    document.getElementsByTagName("button")[2].hidden = false;
  }
}

function showGuessHistory() {
  document.getElementById('player').innerHTML = '';
  let word = "letters";
  for (let pre in history.playerResult) {
    if (history.playerResult[pre].similarity === 0 || history.playerResult[pre].similarity === 1) {
      word = "letter";
    }

    let preWord = history.playerResult[pre].guess + ": " + history.playerResult[pre].similarity + " " + word + " in common";
  
    document.getElementById('player').innerHTML += "<li>" + preWord + "</li>";
    word = "letters";
  }

  document.getElementById('computer').innerHTML = '';
  word = "letters";
  for (let pre in history.computerResult) {
    if (history.computerResult[pre].similarity === 0 || history.computerResult[pre].similarity === 1) {
      word = "letter";
    }

    let preWord = history.computerResult[pre].guess + ": " + history.computerResult[pre].similarity + " " + word + " in common.";
  
    document.getElementById('computer').innerHTML += "<li>" + preWord + "</li>";
    word = "letters";
  }
}

  function mapAll(wordlist) {
    const set = new Set();
    for (let word in wordlist) {
      set.add(wordlist[word]);
    }
    return set;
  }

  function randomWord(list) {
    return list[Math.floor(Math.random()*list.length)];
  }
  
  function pickWord(wordlist) {
    return randomWord(wordlist);
  }
    
  document.getElementById("player-text")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("button").click();
    }
  }); 

  function checkInput(event) {
    history.count += 1;
    let inputValue = document.getElementsByTagName("input")[0].value.toUpperCase();
    document.getElementsByTagName("input")[0].value = "";
    if (wordInfo.word1 === inputValue) {
      event.target.hidden = true;
      statusMessage.innerHTML = `Human wins in ${history.count} turns`;
      document.getElementsByTagName("button")[2].hidden = false;
    }
  
    computerTurn();
    playerResult = {};
    playerResult.guess = inputValue;
    playerResult.similarity = compare(inputValue, wordInfo.word1);
    history.playerResult.push(playerResult);
    showGuessHistory();
  }
  
  function guess(event) {
    event.target.disabled = true;
    checkInput(event);
  }
  

  function check(event) {
    let button;
    if (document.getElementsByTagName("button")[0].hidden == false) {
      button = document.getElementsByTagName("button")[0];
    } else if (document.getElementsByTagName("button")[1].hidden == false) {
      button = document.getElementsByTagName("button")[1];
    } else {
      return;
    }
  
    if (event.target.value.length == 5) {
      if (wordInfo.allWords.has(event.target.value.toUpperCase())) {
        event.target.style.color = "green";
        button.disabled = false;
      } else {
        event.target.style.color = "red";
        if (button.innerHTML === "Begin") {
          statusMessage.innerHTML = "Unknown word. Choose a different common 5 letter word for them to guess"; 
        } else if ( button.innerHTML === "Guess") {
          statusMessage.innerHTML = "Unknown word. Choose a different common 5 letter word to guess";
        }
      }
    } else {
      event.target.style.color = "black";
      if (button.innerHTML === "Begin") {
        statusMessage.innerHTML = "Enter a common 5 letter word for them to guess";
      } else if ( button.innerHTML === "Guess") {
        statusMessage.innerHTML = "Enter a common 5 letter word to guess";
      }
      button.disabled = true;
    }
  }
  
  function addEventListener() {
    document.getElementsByTagName('button')[0].addEventListener("click", begin);
    document.getElementsByTagName('button')[1].addEventListener("click", guess);
    document.getElementsByTagName('button')[2].addEventListener("click", reset);
    document.getElementsByTagName('input')[0].addEventListener("keyup", check);
  }

    // function render() {
    //   document.querySelector('.player-guess ul').innerHTML = generateList();
    // }
  
    // function generateList() {
    //   showTurn();
    //   const list = tasks.map( (element, index) => `<li data-item="${index}">${element}</li>` ).join('\n');
    //   history.count += 1;
    //   return list;
    // }
  
    // function addToList(task) {
    //   tasks.push(task);
    //   render();
    // }
  
    // function getNewTask() {
    //   return document.querySelector('.player-text').value + ", " + " in common.";
    // }
  
    // function addTask() {
    //   addToList(getNewTask());
    // }
  
    // function addAddListener() {
    //   document.querySelector('.button').addEventListener('click', addTask);
    // }
    
    // function showTurn() {
    //   document.getElementById('count-turn').innerHTML = history.count;
    // }
    
    // var statusOutput = document.getElementById('status_output');

    // //check status
    // function guessStatus(){
    //   statusOutput.value = "Enter a common 5 letter word for them to guess"
      
    //   statusOutput.value = "Enter a common 5 letter word to guess"
      
    //   statusOutput.value = "Unknown word. Choose a different common 5 letter word for them to guess"
      
    //   statusOutput.value = "Unknown word. Choose a different common 5 letter word to guess"
      
    //   statusOutput.value = "Computer wins in" + history.count + "turns"
      
    //   statusOutput.value = "Human wins in" + history.count + "turns"
    // }
    
    // start();
    // addAddListener();
    // render();

    

    