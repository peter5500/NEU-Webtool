# Questions and Answers for Exam 2

## Question: Why will the below code not work as intended (unrelated to the url or error handling)?  Include a description on how to fix it (code to help your answer is okay but not required.  A non-code description of how to fix it is required).  Be sure to say _why_ it will not work as the author expected.

```
const data = fetch('example.com/test')
.then( response => response.json() )
.then( json => { 
  return data;
});

console.log(data.cats);
```
### Answer:
 
Since the code will be asynchronous, the console.log will come out faster than the return data, thus the print out result will be undefined. We can solve the problem by putting the console.log in the same bracket with return data as follow, and the code will work as intended.

```
const data = fetch('example.com/test')
.then( response => response.json() )
.then( json => { 
  console.log(data.cats);
});
```


## Question: What is the scope of a variable in JS?  How does it relate to closures? 

### Answer: 
 
1. Normally speaking, the variable that declared globally has a global scope (which means that it is declared outside a function), it can be used anywhere. And the variable that declared in a function, has a local scope. Since the local scope variable can only be accessed and recognized within the function, it can only be called inside the function which declared it, and the same name can be used in different fucntion cause it won't influnce other.

2. The closure is the function inside another function, and have access to the variables in the outer function. It usually used to control side effects or create private variables.


## Question: What is a polyfill, and how would a polyfill for a new Array function relate to the concept of prototypes? 

### Answer:

Since the older browsers may not able to support the modern functionality or API, by using the the polyfill to cover cracks and holes, the modern functionality that work in modern browsers can also work on older browsers that do not have the support for that functionality built in. 
And since all JavaScript objects inherit methods from a prototype, so if we can't find the new array function in the prototypes, we will need polyfill to implement it.


## Question: What is CORS and why is it only in browsers?  How does it relate to Same Origin Policy (SOP) ?

### Answer: 

1. CORS is a mechanism that uses additional HTTP headers to let a user gain permission to access selected resources from a server on a different origin. Often used when requests a resource from a different domain, protocol, or port than the one from which the current document originated. The CORS requires the client-side code, the browser, and the server to work together. Since the client-side code has to explicitly initiate a Cross-Origin request and the browser has to ask the server if it is permitted. So CORS has to do with the browsers.

2. Since SOP only has the access to its origin, by using CORS can provide cross-origin access.



## Question: What is the difference between a bundler and a transpiler?

### Answer:

A bundler is a tool that can put your code and all its dependencies together in one JavaScript file. And transpiler is a tool that can recognize your source code written in one programming language, and produce the equivalent code into another language.

