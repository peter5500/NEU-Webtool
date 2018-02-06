# Exam 1, Part 2

## Expected File Structure
* exam01/part02/index.html
* exam01/part02/(0 or more subdirectories)/(at least one .js file).js
* exam01/part02/(0 or more subdirectories)/(at least one .css file).css

## Task

### Overview

Apply the same rules from Part 1 unless overridden here

Similar to Part 1 (you are welcome to copy any parts of your answer there for use here), but instead of only a human guessing, we're adding a computer player.
When starting, the player enters a secret word from the wordlist and clicks a 'Begin' button (or presses Enter). The computer player will select a random word from the wordlist and console.log() it.

The player will go first, entering a guess and seeing the number of letters that match their opponents secret word's letters, regardless of position.  If they have guessed their opponents secret word exactly, the page indicates who won and in how many turns. If the human player did not guess the exact word, the computer will make a guess and the results list for the computer will update with the guess and results. 

### Technical Requirements

Copy the values from wordlist.js to use in your code.  All secret words are selected at random from the word list.

The page has:
- two guess-result lists, one for each player
- two word input areas, one for each player
- a status message area
- NO separate turn counter display area 
- The human will have a Begin/Guess/Reset button
- The computer will not have a button

#### Result Lists

As with Part 1, but 'No guesses made' should appear in place of each list when that is true

#### Word Input Areas

As with Part 1, except if the player has entered a 5 letter word that is NOT in the wordlist, the Guess button will not enable, the word text will turn red, and the status text will inform the user the word is not in the wordlist.  When the word is less than 5 characters long the Guess button will not enable, but the text is not red and the status message text will say 'Enter a common 5 letter word to guess'.  If the word is 5 characters long and IS in the wordlist, the word text will be green and the Guess button is enabled. 

At the start of game the word input area will be used to get the player's choice of their secret word.  It will follow the same above requirements

The Computer Word Input Area is different - it displays the previous guess (the computer should go too fast to be showing the current guess much before it is no longer the computer's turn.

Human - clears the guess when a guess is made, Computer - writes the guess when a guess is made

#### Status Message Area

A _single_ changing line of text as opposed to a list.  This should always reflect the state of the game, and each of the following should appear when appropriate
* 'Enter a common 5 letter word for them to guess'
* 'Enter a common 5 letter word to guess'
* 'Unknown word.  Choose a different common 5 letter word for them to guess'
* 'Unknown word.  Choose a different common 5 letter word to guess'
* 'Computer wins in NNN turns' (use actual number for NNN)
* 'Human wins in NNN turns'

#### Begin/Guess/Reset Button

This is Begin when the player has not selected a secret word.  It is enabled only when a 5 letter word from the list has been entered.

This is Guess as per Part 1

This is Reset as per Part 1

Unlike Part 1, you can use different button elements if you want to - just only have one visible at a time

### Visual Requirements

#### Results Lists
As with Part 1.  Which player a result list is associated with should be visually obvious.

#### Word Input Areas

Part 1, plus the changes listed above and below

Note the formatting on good/bad 5 character words from the technical requirements

#### Status Message Area

This should clearly apply to BOTH players

It should not be hard to notice this text

It should not be hard to notice when this text changes

#### Begin/Guess/Reset Button

Per Part 1 and the changes listed above and below

The computer's areas should balance against the human's area even though the human has a button that the computer does not.

