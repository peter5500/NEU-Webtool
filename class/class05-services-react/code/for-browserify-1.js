// Remember that the browser doesn't understand require(), just like Node doesn't understand `import`
const otherModule = require('./for-browserify-2'); // Note the leading path (/.) that external modules don't have

// No IIFE is required because browserify will add one

const generated = otherModule.words().map( word => `<li>${word}</li>` ).join('');
document.getElementsByClassName('example')[0].innerHTML = generated;
