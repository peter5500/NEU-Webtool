(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
// Remember that the browser doesn't understand require(), just like Node doesn't understand `import`
const otherModule = require('./for-browserify-2'); // Note the leading path (/.) that external modules don't have

// No IIFE is required because browserify will add one

const generated = otherModule.words().map( word => `<li>${word}</li>` ).join('');
document.getElementsByClassName('example')[0].innerHTML = generated;

},{"./for-browserify-2":2}],2:[function(require,module,exports){

const baseWords = [ 'cats', 'are', 'kings', 'and', 'queens'];

const words = () => { return baseWords.map( word => word.toUpperCase() ) };


module.exports = { // without this modules that require() this file will get nothing back
  words: words,  // In modern JS we don't need to repeat an key/value pair if the variable name matches the key
  baseWords // See? same as "baseWords": baseWords
};

},{}]},{},[1,2]);
