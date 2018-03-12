# React-based Letter Comparison, server-side

## Due

Due 6:29pm, Mon Mar 12

## Assignment

* Don't forget to start from your master branch
* Don't forget to pull origin master
* Create a react-102 branch
* use create-react-app to create a react project in a subdirectory named `guess-client`.  (So you should end up with the react files in /work/react-102/guess-client/ )
* create an express server to run webservices in a subdirectory named `guess-server`.  (So you should end up with the server files in /work/react-102/guess-server/ )
* Your goal is to take your react-101 assignment (with any clean up you desire, but meeting the react-101 requirements) but making the following changes:
    * Create a web service that selects a secret word from the word list, associates it with an id number (which can be anything, but the service has to be able to find the correct secret word given the id but the user cannot figure out what the secret word is from just the id and the wordlist
    * Create a web service that is passed a guess and an id - it will return the comparison results
        * The web service checks that the id is a valid and that the guess is a string of the exact correct length and returns an error code if anything does not check out. (400 is the appropriate HTTP status code, but you should also send a more-specific error code in the body of the response so the client can say more that "That was wrong"
    * Create a web service that returns the full wordlist
    * Change the web app to use these services 
        * The web app does not have the wordlist hardcoded in it
        * The web app never knows the secret word until the player has made a correct guess
        * The web app calls the id-word generating service to set the secret word
    * The web app manages the case of the service not working and/or returning an err gracefully (meaning the user is informed, and if the error is correctable, they can continue to use the app
* You can examine the `example-client/` and `example-server/` directories for examples
* To run both it is easiest to have two terminals, one to start the server and one to start the react webpack-dev-server
* Each must run with `npm install; npm start`.  You can see the package.json in example-server to see how to make `npm start` work
* For React to be able to reach the server you will need to set the `proxy` value in the package.json - this will pass-through any request that isn't a static asset to the other server.  This setting is specific to create-react-app, though the concept applies to many setups.
* You are not expected to build/bundle the React files - it is fine being runnable only via `npm install; npm start`

### Functional Requirements
