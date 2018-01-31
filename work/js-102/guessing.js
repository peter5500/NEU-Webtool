// Picks a random word and then tries to figure it out from guesses

const wordInfo = {
  allWords: allWords()
};
wordInfo.word = pickWord(wordInfo.allWords);
wordInfo.magic = thinkAbout(wordInfo) // store any pre-calculations for later

const history = {
  results: [],
  count: 0
};
// Notice how different sections have blank lines
// These have no impact on the computer, they are for humans
// They work like paragraphs - separating sections that do different things

let won = false;
let result = {};

while (!won) { // Will loop over block until condition isn't true
  history.count += 1;
  const guess = pickGuess(wordInfo, history);
  result = compareLetters(guess, wordInfo);
  if(!result) {
    console.log("It looks like you've not yet edited the file as instructed");
    process.exit(1);
  }
  history.results.push(result); // Adds to end of the history.results array
  // The strings below need to be careful to add spaces in the right places
  console.log('Comparing ' + wordInfo.word + ' to ' + guess + ': ' + result.similar + ' letters in common');
  if(result.won) {
    won = true; // we could actually remove 'won' and only use 'result.won'
  }
}
// Backticks (only) allow you to insert values directly into the string
console.log(`Found ${wordInfo.word} in ${history.count} turns`);

// YOU MAY ADD YOUR OWN FUNCTIONS (ONLY FUNCTIONS) BELOW THIS

// YOU MAY ADD YOUR OWN FUNCTIONS (ONLY FUNCTIONS) ABOVE THIS

function thinkAbout( wordInfo ) {
  // Perform any work you want to do at startup that involves wordList
  // Do not modify wordList or any other outside variables
  // return anything you want, even nothing

  // EDIT BELOW THIS

  // EDIT ABOVE THIS
}

function pickGuess( wordInfo, history ) {
  // returns a word out of word list
  // tries to use the result of previous guesses to make its choice
  // along with any startup info that was stored in history.info

  // EDIT BELOW THIS

  // EDIT ABOVE THIS
}

function compareLetters( guess, wordInfo ) {
  // returns a 'result' object
  // Use the code to determine what needs to be in result
  // You may add info in result beyond what is needed if you wish

  // EDIT BELOW THIS

  // EDIT ABOVE THIS
}

// THERE IS NOTHING TO EDIT BELOW THIS

function random(list) {
  // notice that this is not specific to the list of words
  // that just makes it more useful
  // and requires less work if/when I change what I'm picking from
  return list[ Math.floor( Math.random() * list.length ) ];
}

function pickWord( wordList ) {
  // Ignore this magic for right now
  // It is to aid in grading
  if( process.argv[2] ) {
    return process.argv[2];
  }
  // this is what will happen most of the time
  return random( wordInfo.allWords );
}

function allWords() {
  return `
Abrus absit adust agist agust alist angst ansar Anser antes Aotes
Aotus Arcos Argas Argus Aries arise arist Arius arles arose Arras
arras arris arses arsis arsle arson arsyl arusa Asarh Ascot ascot
ascry Asher ashet Ashir Ashur ashur askar asker asper asset astay
aster astir astor Astur Asuri Atlas atlas atmos Avars avast awest
baris barse basta baste basto Batis beast beest beset besit besot
besra betis betso Betsy birse birsy bisti Bitis blast blest boast
boist boost boots Boris boser brash brass braws brisk briss brose
brosy brush buist bursa burse burst Butsu carls carse caser caste
ceras Cetus chest Chris cista coast coost corps corse coset costa
Cotys Cours craps crash crass cress crest crisp criss crosa cross
cruse crush crust Cursa curse curst cutis Cyrus cyrus Dares darst
darts dasnt deist didst doest Doris dorts doser dregs dress drest
drias drisk dross Druse druse drusy dryas dunst durst dusty easer
egest erase Ernst erose Ersar esere esker ester estoc estop estre
estus ethos Eurus exist farse Farsi faust feast feist Feste fetus
first fisty Foist foist foots Forst frase frass fresh frisk frist
frosh frost frush fusht fusty garse geest geste ghost girse girsh
glost gorse gorsy grasp grass grist grits gross grosz grubs Grues
Gruis grush gruss guest gusto gusty gyrus harsh hasta haste hasty
herse hirse hoast hoist horse Horst horst horsy Hosta hurds hurst
ictus Idist inset Irish islet islot istle joist jours joust justo
Karst karst keest Keres kisra kreis krems krosa kurus kusti Larus
laser lasty latus least litas litus loris loser lotus lusty maris
Marsh marsh Marsi masty matsu meros merse metis midst miser misty
mitis moist moors moost mores Morse morse Morus moste Mosur muist
musar muser musty nares nasty nates neist nesty Norse Norsk noser
Notus nurse nursy odist onset Oreas Orias ornis orris orsel Orson
Oscar osier Oskar Osset Ostic ovest ovist owser pants Paris parse
Parsi Parus paste pasty patas Patsy peres perse peste Piast poros
porus poser posit prase press prest prism priss prius props prose
proso pross prosy pryse psora puist purse pursy Pyrus quest quits
raash raise ramus rasen raser raspy rasse reask reasy rebus reese
reesk reest reges reins renes resaw resay resee reset resew resex
resin resow resty resue resun resup reuse rinse risen riser rishi
risky roast Roist roosa roost ropes rosal rosed rosel roset rosin
Rotse rouse roust rudas rufus rushy rusky rusma rusot Rusty rusty
saber sabot sabra sacra sacro saint sairy saker salar salat salta
salty sanct sapor saraf sargo sarif sarip sarna sarod saron saros
sarpo sarra sarsa Sarsi sarus satan satin satyr sault saury saute
sauty saver savor sawer sayer scalt scant scare scarf scarn scarp
scart scary scaur scaut sceat scent scler scoot score scorn scote
Scots scour scout scrab scrae scrag scram scran scrap scrat scraw
scray scree screw scrim scrin scrip scrob scrod scrog scroo scrow
scrub scruf scrum scuft scurf scuta scute seary secre seity septa
serab serai seral serau seraw sereh Seres serge serif serin serio
sermo seron serow serra serry serta serum serut serve servo sesti
setae setal seton setup sever sewer sexto sfoot shaft shalt shant
shard share shark sharn sharp shear sheat sheer sheet sheth shier
shift shire shirk shirl shirr shirt shita shoat shoer shoor shoot
shore shorn short shote shott shout shrab shraf shrag shram shrap
shred shree shrew shrip shrog shrub shrug shunt shure shurf shyer
sider sidth sight sikar siket silty simar siper siren sirih siris
sirki sirky siroc sirup sitao sitar sitch sithe sitio situs siver
sixer sixte sixth sixty sizar sizer skair skart skate skeer skeet
skere skete skier skift skirl skirp skirr skirt skite skout skyre
slait slant slare slart slate slath slaty sleer sleet slent slept
slete slirt slite slorp slote sloth slour sluer sluit slurp smalt
smarm smart smear smeer smelt smeth smirk smite smith smolt smoot
smore smote smout smurr smyth snare snark snarl snary snath sneer
snerp snift snirl snirt snite snoot snore snork snort snout snurl
snurp snurt soary sober socht sofar softa softy soger soget solar
soler sonar soord sooth sooty sopor soral sorda soree sorgo sorra
sorry sorty sorus sorva sotie sotol soury south sowar sower sowte
spaer spalt spare spark sparm spart spary spate spear speer spelt
spent sperm spier spilt spire spiro spirt spiry spite spitz splat
splet split spoor spoot spore sport spout sprad sprag sprat spray
spree spret sprew sprig sprit sprod sprue sprug spurl spurn spurt
sputa spyer squat squit sruti staab stack stade staff stage stagy
staia staid stain staio stair stake stale stalk stall stamp stand
stane stang stank stare stark starn start stary stash state stauk
staun staup stave stawn stays stchi stead steak steal steam stean
stech steed steek steel steen steep steer steid stein stela stele
stell stema stend steng steno stent stept stere steri sterk stern
stero stert stewy stich stick stife stiff stile still stilt stime
stimy stine sting stink stint stion stipe stirk stirp stite stith
stive stivy stoat stock stoep stoff stoga stogy stoic stoke stola
stole stoma stomp stond stone stong stony stood stoof stook stool
stoon stoop stoot stopa stope store stork storm story stosh stoss
stoun stoup stour stout stove strad strae strag stram strap straw
stray stree stret strew strey stria strid strig strip strit strix
strom strop strow stroy strub strue strum strut struv stubb stuck
stude study stuff stull stulm stump stung stunk stunt stupa stupe
stupp sturk sturt stuss styan styca style stylo suant suber sucre
suety sugar suint suist suite suity super surah sural surat sures
surfy surge surgy surly surma surra sutor sutra sward sware swarf
swarm swart swath swear sweat sweer sweet swelt swept swerd swift
swird swire swirl swith sword swore sworn swure syrma syrup tabes
tacso taise tales talis talus tamas tamis tangs tansy tapas tapis
tarse tarsi tasco tasse taste tasty Tates tawse taxis tease teasy
teems teens teest temse tense teras terse testa teste testy thats
these thisn those times tipsy tisar Titus toast toise tongs tonus
toosh topsl torse torsk torso torus toshy tossy touse tousy traps
trash trass trasy tress trest trews Trias trist trogs trush truss
trust tryst tsere tsine tsuba tsubo tuism tulsi turns turps turse
turus tusky twist tylus tyste unset unsty upset upsit urase ursal
Ursid urson ursuk Ursus usara usent usher uster usure usurp usury
utees utsuk varus vasty verse verso verst Vesta virus visit visor
vista visto Vitis waist warse warst Wasat Wasir wasnt waste wasty
weste westy whats whist whits Wiros wiser wisht wiste works worse
worst wrest wrist Xeres Xerus Xyris xysti Yasht yeast yesty yinst
yours zeist zesty zoist
`.split(/ |\n/g).map( word => word.toUpperCase() ).filter( word => word );
}
