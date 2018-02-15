# Browserify

The web doesn't (easily) support one JS file including an other.  There have been a few attempts to deal with this, because different files are a useful tool for keeping your code maintainable.

Browserify is one such solution.

## What

Browserify is a program (a bundler) that converts a number of JS file that use node conventions such as require() into a single JS file that can run in the browser.

## Example

* See code/for-browsierfy-1.js and code/for-browserify-2.js.
* See code/public/use-browserified.html
* See that there is NO code/public/js/from-browserify.js

**Switch to the code/ directory**

* If you have run `npm install` from here will have a copy of browserify.  
* If you then run `browserify for-browserify-*.js -o public/js/from-browserify.js` you will create the from-browserify.js file
* If you run `node simple-server.js` and then visit http://localhost:3000/use-browserified.html you will see the browserified code run.
* If you make any change to for-browserify-1 or for-browserify-2, you will need to re-run the browserify command to get your changes into the bundle
* The filenames here are not magic, I just picked names to make what happens more clear.  It is quite common to see the resulting file as `bundle.js`.
