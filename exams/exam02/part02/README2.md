# Exam 2, part 2

## Expected file structure
* exam02/part02/ holds a create-react-app application (the package.json, src/ directory and other directories are directly inside part02/.  This will require some effort on your part.
* exam02/part02/package.json
* exam02/part02/alfred.js
* exam02/part02/barbara.js
* exam02/part02/wordlist.js
* exam02/part02/src/config.json
* other files directories within exam02/part02/ as needed/desired

## Task

### Overview

You will create a create-react-app based single-page application and 2 separate web servers (in addition to the development server that create-react-app gives you. The application will have a 'Start' button, and two columns labeled in the UI as 'Alfred' and 'Barbara' (which are the servers).  When the start button is pressed, the page will start a game, asking each server for a secret word, which is shown to the user.  The servers will alternate guesses, each attempting to determine the others secret word.  Each guess will be collected by the page from the server guessing, and the page will then send that word to the otherserver, which will respond with the number of matching letters (regardless of position) which is added to the column of the guessing server.  The server that responded with the number of matches will then be asked for it's guess, and the server that had made the previous guess will then be asked to score the new guess, and so forth, alternating turns.  When a winner is determined, each server is informed the game is over, and the winner is shown on the page.  The user is given the option to start a new game.  Doing so will clear the previous guesses and scores.

### Technical Details

You will have a create-react-app, and an 'alfred.js' and a 'barbara.js', as well as a 'config.json'

You should use create-react-app, express, and body-parser.  No other outside libraries.

Running `npm install` and `npm start` will start the create-react-app dev server

Running `npm run alfred` (in the same directory) will start a webserver using alfred.js on port 8080. 

Running `npm run barbara` (in the same directory) will start a webserver using barbara.js on port 8888.

The config.json will have the JSON structure of: { "alfred": "http://localhost:8080", "barbara": "http://localhost:8888" }

The react app will load the config.json.  All calls made to alfred or barbra will use those servers as the base, so that if these values are changed and the server restarted, the app will call the servers at the new locations (but with the same paths)

All the service endpoints listed here will send CORS headers to accept requests from any origin.  Do so without any additional express libraries.

All service data exchanges will happen using the data models listed in `API Data Models` below.

On load, the React page will have a button marked 'Start'.  When this button is pressed, the page will send a POST request to `/game:8080` and a request to `/game:8888`.   (Remember that these andall other calls will use the urls from config.json as the base)

Each server will respond to a POST request to /game with a game id number (`id`) and a secret word chosen randomly from wordlist.js, delivered in JSON.  Each such call to one of these endpoints will return a different number (no repeats), though each server can use numbers that the other has used, but does not have to.

Each server will respond to a DELETE request to /game/(id) (where id is a game number) by removing any internal record of that game.

Each server will respond to a GET request to /game/(id)/guess/(guess) with a JSON object that returns the number of matching letters (regardless of position) as we've done in other assignments, as well as 'hasWon' flag that will be true if the guess was the exact secret word. 

You may include additional data in the responses as you wish, but not in the requests.  You cannot violate the restrictions listed below.

Each server will respond to a PUT request (containing a JSON object with a guessed word from that server and the matching count of letters as returned by the other server) to /game/(id)/guessed with a JSON object containing a new guess.

The page will not send the win results to the server that made the correct guess.

When one server has correctly guessed the secret word of the other, the app will visually indicate the winner and will make the appropriate DELETE call to each server.

### Restrictions

Do not change wordlist.js

The app will not know the wordlist.

The app will do nothing with the secret words other than display them.

Each server will not communicate with the other outside of the service calls as listed, and that communication will only be indirect (the page will be in the middle, making the calls)

Each server will NOT know the secret word of the other until that server guesses it.

Each server CAN use files that the other server uses, so long as those files do not allow the server to "cheat" and learn the secret word of the other server.

Each server must be capable of running multiple simultaneous, separate games that do not impact each other. (outside of each using up an id number)

Each server will work regardless of the casing of the letters sent in (uppercase, lowercase, mixed)

The page must not help the servers guess each others words - it will only act as the reporter between the servers.

Data about each game is kept in the server memory only - not in a file or database.

Data about each game in the server memory will include the start time of the game as well as the time of the most recent activity in that game.

The game must actually end in a reasonable amount of time.

### API Data Models

Replace capitals with appropriate data

POST /game is sent no body, returns JSON with: { id: NNN, secret: NNNNN }

PUT /game/ID/guessed is sent JSON: {} (for first call) or { matched: N } (the count of matches the other server returned in response to the previous guess this server returned) and returns { guess: NNNNN } (the new guess)   Make sure this makes use of the ID from the url!

GET /game/ID/guess/GUESS returns { matched: N, hasWon: true/false } which is the number of letters that this guess has in common with the secret word of this server and game id, regardless of position.

DELETE /game/ID deletes any reference to that game id in the server's memory

### Example flow

```
npm install
npm run alfred    ( note: the person starting the server will have to either start these in the background or run multiple terminals, because the servers won't stop to allow them to start the other servers)
npm run barbara  (same note)
npm start  (this is run last so the other servers are there to talk to.  If this starts first the user will have to reload the page after the servers have come online)

load react app in browser
click Start
app sends POST to /game on alfred, receives an id and a secret word.  
alfred relates that secret word and a timestamp to that id
app displays secret word to user above the 'Alfred' column/list
app sends POST to /game on barbara, receive an id a secret word
barbara relates that secret word and a timestamp to that id
app displays that secret word to user above the 'Barbara' colummn/list 
app sends PUT to /game/(id-for-that-server)/guessed to the first server (alfred or barbara)
app receives a guess
app sends that guess to the second server (GET /game/(id-for-that-server)/guess/(the guess))
app receives a number of matching letters (regardless of position, as per previous assignments)
app displays the guess under the column of the first server along with the number
app will remember this matching number, but not use it yet
app sends PUT to /game/(id-for-that-server)/guessed to the second server
app recieves a guess
app sends that guess to the first server (GET /game/(id-for-that-server)/guess/(the word)
app receives a number of matching letters from the first server about this guess
app displays the guess under the column of the second server along with the number
app will remember this number, but not use it yet
app will send the first remembered number (the results of the first server's guess of the second server) to the first server (PUT /game/(id-for-that-server)/guessed ) 
app will receive a new guess from the first server
...process continues alternating until a server indicates their word has been matched
app will show who has won
app will send DELETE /game/(id-for-that-server) to both alfred and barbara
'New Game' button is shown 
Pressing new game will clear the data from the first game and start over as when Start was initially pressed
```

## Tips

You will have to do some copying/shuffling to get a create-react-app to be in the correct directory.  Don't forget to run `npm install` after doing so.

Remember to use config.json for the service calls made by the react app.  JSON files can be imported or required directly.  The goal is to be able to change your app to use other people's services with config.json as the only change.

I recommend building each part in turn - app makes the first call (and fails), then you add that call to a server.  Then you write the second call into the app.  Confirm each piece quickly while your changes are small.

alfred and barbara can have identical code except for their port.

Remember that alfred and barbara can have different id numbers, even if your use of them does not.  Make sure you are using the correct ID number for each call.  A good way to test this is to manually call one server's endpoint a few times to make sure their IDs are not in sync, or play a few games then restart ONE of the servers to make sure their IDs are not in sync.

Your code must get a correct guess in a reasonable time, but there are no requirements for being terribly good at it.  (See Extra Credit below)

## Extra Credit

I will hold a tournament between all the alfred servers, pitting one student's alfred server against another's, in a double elimination tournament with each matchup being best 2 out of 3.  First place and those tied for second will get some extra credit.  Services that do not follow the basic rules and/or cannot be started/connected to will be ineligible. 
