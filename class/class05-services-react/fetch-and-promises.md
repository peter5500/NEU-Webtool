# Fetch and Promises

## Fetch Overview

fetch() is a newer native JS method to make service calls.  It exists in the latest versions of all major modern browsers.  Node does not have it native, but it is supported via the `node-fetch` module.  Polyfills exist for older browsers.  For browsers, fetch() is a nicer alternative to XmlHTTPRequest (XHR).

fetch() makes HTTP/S requests and returns their response.  Because this is happening in the JS code on the browser, instead of changing the current page it just sends/receives in the background, and the JS code can decide what to do with the response.

fetch() is an asynchronous call that returns a promise.  

## Promise Overview

All of this covers Promises in JS - other languages will have different constructs, and possibly different concepts called "Promises"

### Base Promise

A Promise is an object that:
* Tracks it's own status (pending/resolved/rejected)
* resolves or rejects with a value (which might be undefined)
* Either resolves or rejects but not both
* Resolves/rejects no more than once
* maintains a list of callbacks to call with a resolved value
* maintains a list of callbacks to call with a rejected value 

Promises are known as "thenables" (because they have a .then() method).  A Promise that has resolved or rejected is known as 'settled'. 

### Promise callbacks

A callback is added to the list of callbacks if resolved/rejected by having a callback passed to the then() or catch() methods.  (Internally then() actually takes two methods, with the second being the on-rejected callback.  In practice, you want to only use the one parameter version of then(), and use catch() for rejection handling.  Internally catch() calls then().  This matters to you only if you see someone use the two-argument version of then().)

Callbacks can be added to a promise before OR after the promise is settled.  This is a major benefit to promises.

then() and catch() return NEW Promises.  These new promises will resolve/reject themselves based on the return value of the callback passed in when the new promise was created.

A callback is called with the resolve/reject value of the promise itself.  That is, the resolve/reject value is passed to the callback as an argument.

Example:
```
// A new Promise that resolves with 'I resolved!'
const promiseA = new Promise.resolve('I resolved!');
// The promise is resolved, but that doesn't mean or do anything yet

// then() returns a new promise:
const promiseB = promiseA.then( resolvedValue => {
  console.log('B ran');
  return resolvedValue.toLowerCase();
});
// the callback function is added to promiseA's list of callbacks to call when resolved.  
// It IS already resolved, but the callback does not trigger until we hit the event loop.
// PromiseB is NOT yet resolved.  It will only settle once the callback that was added 
// to PromiseA (and whose addition created promiseB) runs.

const promiseC = promiseB.then( resolvedValue => {
  console.log('C ran');
});
// PromiseC, like promiseB, is a distinct promise and is not yet resolved.  

// The below promise is made by adding a callback to promiseA. 
const promiseAb = promiseA.then( resolvedValue => {
  console.log('Ab ran');
});
// PromiseA already had a callback added (the addition of that callback created promiseB)
// That's not a problem.  When PromiseA resolves, both callbacks will be run.  The first 
// callback decides if the promiseB resolve callback (the one added via .then()) is run, 
// while the second callback decides if the promiseC resolve callback is run.  Since 
// promiseA does resolve, both callbacks will be called.  Because both of those callbacks 
// succeed, both promiseB and promiseAb will themselves resolve, which in turn will 
// trigger their callbacks added via .then()

const promiseAc = promiseA.catch( rejectedValue => {
  console.log('this should not run');
});
// catch() adds the callback to a second list of callbacks - callbacks that will only run 
// if the originating promise (promiseA here) is rejected.  Rejection happens either by an 
// explicit reject or if the callback throws an error.  Promises will trap any error and 
// pass the error object to the callback passed to catch() or in the case of an explicit 
// reject, the reject value is passed as the argument to the callback.

// Because each then()/catch() returns a promise, and every promise has a .then() and .catch() 
// method, you can chain then()/catch() calls

new Promise.resolve('demo').then( word => word.toLowerCase).then( lowerable => lowerable() );
// Remember that a fat arrow function without curly braces returns the result of the fat arrow function body.
// Also, that toLowerCase is a function object, while toLowerCase() _calls_ that function.

```
### Promise and catching errors

Because the creation of the promises (and the saving of their associated callbacks) is done synchronously, but the callbacks are executed asynchronously, the normal way of trapping errors and preventing them from breaking the program (that is, try/catch blocks) will not work.  

```
const example;
let p;
try { 
  // below runs successfully - the promise(s) are created and callbacks recorded
  p = new Promise.resolve().then( () => example.doesNotExist() );
} catch (e) {
  console.warn(e);
} // Reach this line of code and the try/catch is over

// only once we return to the event loop will the callback run 
// a "no such method on undefined()" error will be thrown
// it will not be caught by the try/catch because the the try/catch block is done
```
Instead, any thrown error inside a callback will cause the promise that was created when that callback was assigned to be rejected.  The reject value will be the error object.  If a callback was added via catch(), that callback will be called 

You should always use .catch() on a promise.  The only reason not to is if you are returning a promise and you want the caller to decide how to handle errors.

### catch() can quiet caught errors

Once the callback passed to catch() completes, unless it returns an explicit reject or throws a new error, then the promise created when that callback was assigned will _resolve_ with the return value of the callback.

```
const example;
const p = new Promise.resolve()  
.then( () => example.doesNotExist() )
.then( () => console.log('will not run') )
.catch( (e) => console.log('trapped error', e) )
.then( () => console.log('will run') );
```
### Promises 'fall through'

Notice in the code above that we're calling .catch() on the promise returned by the then() that had the callback that doesn't run.  If it doesn't run how does the callback to catch() ever run?

Let's add some notes to refer to different parts of the code:
```
const example;
const p = new Promise.resolve()   // returns promiseA
.then( () => example.doesNotExist() ) // .then() (of promiseA) returns promiseB
.then( () => console.log('will not run') ) // returns promiseC
.catch( (e) => console.log('trapped error', e) ) // returns promiseD
.then( () => console.log('will run') ); // returns promiseE, but no one pays attention to promiseE
```
Once we hit the event loop, promiseA, being already resolved, calls the callback added via then().  THAT callback has the bad code, so it throws an error. That error is trapped and promiseB gets the rejected status.

promiseB, being rejected, would call any callbacks attached via .catch() (in this case, none) then it sets any promises it returned (by .catch() OR by .then() - internally there's just then(), remember) to a rejected status.  In this case that is only promiseC.

promiseC, behing rejected, calls any callbacks attached via .catch(), and so forth.

This also explains why a successful catch() callback will trigger a .then()

### Promises that return promises

If a promise assigned to a callback returns a promise itself, the promise that was created when that callback was assigned will resolve not with the return value of the callback, but rather with the resolve/reject value of that promise

```
console.log(new Promise.resolve('foo')); // prints a Promise object

const p = new Promise.resolve()
.then( () => 'bar' ) )
.then( resolvedWith => console.log(resolvedWith) )
.then( () => Promise.resolve('foo') )
.then( resolvedWith => console.log(resolvedWith) );

// prints out 'bar' and 'foo', NOT 'bar' and a Promise object
```

This means a two main things:

* If you want to actually return a promise such that the promise is passed to the callback...you have to jump through some hoops (such as passing an array that holds only the Promise).  Fortunately this rarely happens.
* If you have a sequence of asynchronous steps, each of which return a promise, you don't have to create a Pyramid of Doom, instead you can "flatten" your chain:

```
// BAD - NOT REAL
stepA().then( a => {
  stepB(a).then( b => {
    stepC(b).then( c => console.log(c) );
  })
});

// Better!
stepA().then( a => {
  return stepB(a);
})
.then( b => {
  return stepC(b);
})
.then( c => console.log(c) );
```
### Promises and async/await

You may encounter articles talking about async/await and the gloriously more simple syntax.  

Do not use async/await yet.  The syntax IS more simple, but that makes it harder to truly understand what is going on, because async/await are still Promises behind the scenes, and if you don't understand Promises you can easily get into situations you don't mean to with async/await.   Raw promises are more syntax, but also more explicit syntax.

## How Fetch uses Promises

The fetch() promise will resolve with a Request object.  The fetch() promise will resolve EVEN IF THE CALL RETURNS AN ERROR.  More specifically, if the server at the other end returns an HTTP error that is still a successful request attempt (the request itself succeeded, you just didn't get what you wanted).  

fetch() will only reject if there is a problem reaching the server - normally this means one of:
  * The domain name could not be found
  * The network had issues 
  * The browser prevented the call due to CORS issues
 
This means you need to check for a successful server result, not just having a .catch().  Fortunately the Response object has a .ok property that tells you:

```
fetch('http://example.com')
.then( response => {  // Here we know only that we could REACH the server
  if(response.ok) {
    // Here we know that the response from the server was not an HTTP error status
  } else {
    // Handler error message from server here
  }
})
.catch( failure => { 
  // Network Error handling here
});
```

### Getting the response data

The Response object has a few different methods to get to any data in the body, notably .text() and .json().  

These methods return PROMISES!  Mostly because you can get the response object before the response is complete, so while you can information such as response.ok that are decided by the response headers, you can't be sure you've got all the response information until the response is complete.

text() returns you a string of the body text.  No surprises.

json() assumes the body text is JSON, and so it converts it to the actual object.  In essence:
```
fetch('http://example.com')
.then( response => {
  if( response.ok ) => {
    return response.text();
  } else {
    // Do something about a bad response
  }
})
.then( text => { 
  return JSON.parse(text); 
})
.then( actualData => {
  // use data
})
.catch((e) => {
  console.warn('what happened?', e);
});

// the above is the same as the below

fetch('http://example.com')
.then( response => {
  if( response.ok ) => {
    return response.json();
  } else {
    // Do something about a bad response
  }
})
.then( actualData => {
  // use data
})
.catch((e) => {
  console.warn('what happened?', e);
});

```

### Using the results

If you want to get the results from a service, your first instinct is guided by synchronous code, and you want to write:
```
const input = getInputFromInputTag();
const result = getServiceData(input);
updatePage(result);
```

But this won't work.  If getServiceData() is making a service call, then that call will be made asynchronously. So the updatePage(result) call will run BEFORE the data has come back.

A rule of thumb: A program is a series of steps. As soon as one of the steps has gone asynchronous the rest of the steps that depend on the result of that step need to also be async.

The only places you get to remain synchronous are:
* When your code is triggered by the event loop.  At that point the running code is synchronous and you can remain synchronous within that logic until you take an asynchronous step is taken
* When you are kicking off some asynchronous step, but have further steps to take that DON'T depend on that step finishing before they can run.

Your code will look more like:

```
const input = getInputFromInputTag();
const resultPromise = getServiceData(input);
resultPromise.then( result => {
  updatePage(result);
});
```
Once you are comfortable with Promises and can use the await/async syntax, it will LOOK like the synchronous code further above, but will BEHAVE like the async code above.

## Fetch options

fetch() is a very user-friendly function.  The only required parameter is a url: `fetch('http://example.com')`  In a browser, that url follows the same absolute/relative rules as any other link, so a page on http://www.example.com that did `fetch('/foo')` would call http://www.example.com/foo.  In node there is no "current" url (remember, for browsers the url is not where the code runs, it's a reference to the place that sent you the code) so every url must be fully-qualified.

When using this single-parameter version of fetch(), some defaults are applied.  Here are the ones that are most commonly relevant ones:
* The request uses the GET method, just like the request made when you load a page in the browser.
* The request will NOT send cookies or other authentication information
* The request DOES send otherwise standard HTTP/HTTPS headers
* If the request is restricted by CORS, fetch() will first issue a "preflight" request to ask the server if it allows you to make the actual request.  You have no control over this preflight request.  Requests FROM Node are not restricted by CORS, but requests from a browser TO Node can be.
* The request can have parameters in the URL (query string parameters) but not body data (GET doesn't send a body)
* If the response involves a redirect message from the server, fetch() will follow the redirect and try to load the url they were redirected to

If you want to change these, you will need to send an 'options' object to fetch().  Some examples:
```
fetch('http://example.com', { method: 'POST', body: 'hello world' }); // Issue a POST request with a body
fetch('http://example.com', { method: 'POST', body: JSON.stringify({hello: 'world'}) }); // Issue a POST request with a JSON body
fetch('http://example.com', { headers: new Headers({ 'X-Special-Header': 'someValue'})); // Add a custom header 
// Node would just pass someObj, not new Headers(someObj) 

fetch('http://example.com', { credentials: 'include' }); // send cookies and authorization headers
```
Note: If you encounter CORS troubles, you may see notes online about `mode: 'no-cors'`.  Don't bother.  That tells the browser to send the request even if it violates CORS, which sounds like a good way to get around CORS troubles.  But if JS could turn off the security that prevents malicious JS from doing too much, that security wouldn't be worth much.  So what the browser does when you make tell it to not apply CORS is to send the request...and give you no access to the response.  Which is pretty useless to you.  There are advanced cases where it's useful, but those involve Web Workers or Service Workers, which run as separate parts and they only get response to pass it to the main code (you), and if you are blocked by CORS you also won't be able to use the response.  Long story short: `mode:'no-cors'` is useless if you're trying to get around CORS in your main code.

### Sending Data

In the examples above there were a few places where data was sent.  Let's expand on that.

GET requests send data in the query-string (other methods can as well, but GET has this as the only option).  For fetch(), this means appending the data to the url, and making sure the data is correctly "escaped" (special characters replaced by their hexidecimal ascii representations.

Non-GET requests can send data in the request body.  The body is just text, so you can put most any text there.  There are a couple of common formats though, the biggest of which are 'www-form-urlencoded' and JSON. 

JSON you are already familiar with, and it's handled as shown in the examples above - passing the JSON text (obtained via JSON.stringify()) to the 'body' property of the options object.

www-form-urlencoded is a set of key-value pairs sent as different lines of text in the body in 'key=value' format.  This used to be the main option, but has quickly lost ground to JSON (or XML, or others).  The only place you see it commonly is when services are built to actually get HTML form data sent to them via an HTML form...and since that probably involves a browser sending the form and loading the response as the page itself you rarely call such endpoints as services (you want data, not HTML pages).

## What does it mean to 'handle' an error?

A common issue for students is that I tell them to always have a .catch() clause...but what do they put there?   Nothing is not the correct answer.  That's probably the worst answer, as any errors will be silenced so you won't know what has gone wrong.  A console.log() is wrong.  console.warn() is only slightly better.

What you really want to do when something goes wrong is exactly what you expect from other sites.  If it's an error that doesn't stop you from continuing or trying again, you make sure the program doesn't blow up and let the user know if they need to do anything.  Even if they can't, a "We're experiencing problems, please try again later" message is better than the user just sitting there waiting for a response that will never come.
