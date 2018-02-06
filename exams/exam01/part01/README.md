# Exam 1, Part 1

## Expected File Structure
* exam01/part01/index.html
* exam01/part01/(0 or more subdirectories)/(at least one .js file).js
* exam01/part01/(0 or more subdirectories)/(at least one .css file).css

## Task

### Overview

The page will let you play a game - it has a secret word, and you try to guess it.  Each guess tells you how many letters are the same between the word (regardless of position), and you may guess again.  The page tracks and displays your guesses and their results.  When you guess the correct word the page will indicate that you won in some text form and allow you to try again, which clears out the info about the previous game and picks a new secret word.

### Technical Requirements

Copy the values from wordlist.js to use in your code.  All secret words are selected at random from the word list.

Your code should console.log() the secret word to console whenever the secret word is determined.  This should be the ONLY console.log() messages.  Use them during development, but not in production code.

You must have exactly two HTML elements that have an id attribute.  No more, no less.  

The page should have these areas
* A Guess/Reset button
* An input area for the guesses
* A list of previously guessed words and their results.  You must be able to display at least 30 of these without visual problems.
* A display of the number of turns taken on the current word.  

#### Guess/Reset button

This a single button, as part of the exam.  The Guess/Reset text and behaviors have to be applied to the same, never replaced button element.

It starts by saying 'Guess'

It starts disabled

When Guess is clicked the following will happen (no particular order needed)
* If the input word is not exactly 5 characters, the Guess button is disabled, and does nothing on a click
* A valid input word will be added to the results board along with the matching-somewhere count of letters
* If valid, the word input is cleared
* If the input word was an exact match for the secret word, the button text will change to 'Reset'

When Reset is clicked the following will happen (no particular order needed)
* The results board is reset to the original page load 
* The turn counter resets to 0
* A new secret word is selected (and console.log()ed )
* The button text changes to 'Guess'

#### Input area for the guesses

This should have a placeholder attribute set

This should start as an empty string

This will not allow the user to input a string longer than 5 characters - pressing keys that would add a character instead does nothing

An 'Enter' press while the focus is on this field will act just as if the Guess button was pressed

This field clears after a guess is made 

This area will not change size when the browser window is resized a bit

#### Previous guesses

This area starts empty, unless you wish to add an explanatory message.

As guesses are made, the guess and the number of letters it has in common with the secret word (regardless of position) is added to the list (visually added - you can replace the content as long as it looks like it is being added. 

The display can be a list, visual columns, how ever you like, as long as all previous guesses (up to at least 30) can be seen

#### Number of Turns taken

This starts at 0 and increments after each guess, right or wrong

This is set to 0 when the Reset button is pressed

When the guess is correct, text indicating a win will display here in addition to the number of turns

This area will not change size when the browser window is resized a bit


### Visual Requirements

Overall - I shouldn't notice the page being particularly poor visually, but appearance does not have to be very fancy.  Demonstrate that you understand how to visually modify layout and text appearances in a reasonable fashion and you have done what is needed.

#### Guess/Reset Button

The button should not change width when the button text changes

Button should make it obvious when the button is Guess, when the button is Reset - additional visuals are permitted

The Guess button has distinct "enabled" and "disabled" states.  Relying on browser defaults is fine.

#### Word Input Area

The word you are typing is the second priority for attention after the results - make it stand out a little

The entire word is visible and clear

The lack of response when trying to add a 6th character should be obvious - I should not be thinking the letters are just hidden, I should realize they aren't happening

#### Previous Guesses

This should be made important visually - the focus of attention

The result should be clearly associated with the guess

The list should be easy to use to plan your next guess

#### Number of Turns taken

This does not need to be prominent, but it should not be hard to find.

