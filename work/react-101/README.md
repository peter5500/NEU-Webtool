# React-based Letter Comparison

## Due

Due 6:29pm, Mon Feb 26

## Assignment

* Don't forget to start from your master branch
* Don't forget to pull origin master
* Create a react-101 branch
* use create-react-app to create a react project in a subdirectory named `guess`.  (So you should end up with the react files in /work/react-101/guess/ )
* Your goal is to create the same kind of guessing game from exam01/part01, but using React
* You can examine the example/ code here for more examples, in addition to the Reactjs website
* You are welcome to copy any code from your exam or previous assignments into this
* You are not expected to do any service calls - this is all run in the browser
* You are not expected to build/bundle the React files - it is fine being runnable only via `npm start`
* You should use the list of words from wordlist.js - see the example/ code to see how to import it.
* The requirements for the game are much less specific than the exam, see below

### Functional Requirements

* The computer should pick a random word from the wordlist (and console.log() it)
* The user should be able to enter guesses (you may assume that the player only makes 5 letter guesses without validating that yet)
* The user should see how many letters were correct somewhere in the word (EAT vs TEA is 3, TEE vs EAT is 2, EAT vs TEE is 2, TEE vs PEA is 1)
* The user will not see how many letters were absolutely correct, only the above count
* The program should not care if the user is using upper or lower case.  EAT vs eat is a 3 letter match and a win.
* The user can see a list of previous guesses and what the count was for each guess
* If the user guesses the correct word, they will be told (somehow) that they have won
* When a user wins, they are able to start a new game
* A new game removes any previous list of guesses and chooses a new secret word
* The only appearance required is enough to be able to use the program

### Technical Requirements

* Your components should be one Component per file, and a component file should not have code unrelated to that component
* Your component files should be have a filename that matches the component, including case (CamelCase), and end in .jsx, except for App.js which can be left as is.  Example: GuessList.jsx
* Your counting calculations and wordlist should be imported from non-JSX files
* Each component should have not be too large - each should try to do one job
* You should use the Component state to track the game variables (word, list of guesses and counts, has player won)
* You should not use React refs, you should not use ids on any elements
* You should NOT copy the default code's crazy CSS classnames - we still want lowercase, we still want kebab-case.
* You should otherwise comply with the best practices in JS, CSS, and HTML from class
* For this assignment, you are welcome to have your CSS in one file or several .

## Tips

* Don't forget to run `npm install` and then `npm start` in the example/ directory if you want to run that code.
* Don't overthink this - do one part at a time.  It can be helpful to have a component initially return `<div>XXX Component</div>` so you keep track of what isn't filled in yet without a lot of effort. 
* Don't try to have a component do a lot.  The more coupling you have the harder it is to write.
* Run your code regularly - keep incomplete components runnable.
* Use your browser console.  Do not ignore any warnings React puts there - they often point to potential errors.
* Remember that state is per Component.  If a contained Component wants to change the parent state, it can't.  The parent can, however, pass a function that changes it's state to the child.
* The example uses only one component with state - you can have multiple.  You want to have as many "pure" components (i.e. dumb/unaware) as you can, but you also don't want a component to know about state that has nothing to do with it.
* Components can only pass data and functions "down" to child components, not up to parent components.
* Try to have your components get any information about other components or state via props that you pass.
* Remember that Components prefer to return just one HTML element - most components wrap content in a div tag
* Components can inject variables in their JSX, including more JSX.  Injecting a null value does nothing.
* Managing a list can be odd at first - see the example/ code
* JSX files need to import React even if you don't see it being used - The JSX converts to React method calls.
* Remember that JSX uses `className` for css classes, not `class`.
* Remember that you can lose your intended value of `this` when 3 things are true:
    * You have a function that uses `this`
    * That function is passed as a callback
    * That function has not been explicitly bound 

