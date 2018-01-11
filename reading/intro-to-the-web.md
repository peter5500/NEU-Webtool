# Intro to the Web 

## First Steps
I assume you're familiar with the web, so I'll focus on some details.  You may know all, none, or some of this, but make sure you don't skip over anything new to you.

### An Alliterative Acronym Assault
We have a lot of words and terms we will use.  Many of those are acronyms, many aren't, and at least one used to be an acronym and no longer is.  In general usage we will be casual about names.  "HTML" or "html", "URL" or "url", it is all the same.  Specific documentation tends to be more formal, but not always.

### Web vs Internet
The web is not the internet.

We tend to use "internet" and "web" interchangeably, both in day-to-day life and on the job, which is fine, there are no "Internet Police" who will lock you up for technical misstatements when everyone in the discussion knows what is meant.  However, as a matter of education, know that they are technically different.

The internet is a system of interlinked computer networks, and web traffic is just one of many types of data passing through the internet.  Examples of other forms of data include:
* Email
* Database traffic
* Game data for World of Warcraft
* VOIP (Voice over IP)
* many, many other kinds of data

### Jargon
* Web - At different times, used to qualify anything to relate to the web.  "web page", "web browser", etc.  Often dropped when the context is clear:  "The browser sent a request to the server" is the same as "The web browser sent a web request to the web server"
* Browser / Web Browser / Client - these are usually the same thing, such as Chrome or Firefox
* webserver / server - A computer that can respond to certain requests for data
* HTML / Markup - the format of the data that makes up a web page
* (web) page / (web)site / (web) app - These might be the same things, or a site may be many pages.  'App' generally means a web page with a high level of interactivity, but there is no set definition people stick to.
* Render - The process of converting data into a visual result
* CSS - The instructions for how some HTML will look when rendered
* Javascript / JS / ECMAScript - a computer language primarily used to add interactivity to a web page

### Java vs Javascript
No relation at all.  The name was a marketing tactic that seems silly now.  A common statement is "Java is to Javascript as Ham is to Hamster".

### High Level View
We'll get into more detail below, but here's a (very) short version:
1) You request a URL on your web browser
2) The browser sends a *request* to a server somewhere for that url
3) The server sends a *response* to the request, containing some data 
5) The browser and server are no longer sending data to each other
6) The browser *renders* that data into a visual "page" for you to see and look at
7) Any Javascript on that page executes, running on the browser.  
8) By themselves, the server and the browser (including the Javascript) have no further interaction 

## Slightly More Detailed

### Brief and relevant parts of web history
This does not give appropriate attention to a lot of details, but I'm focusing on those facts most likely to matter to you as a starting web developer.  I fully recommend looking more about the early years of the Web and the Browser Wars.

The web was created to allow the viewing and linking of scientific papers, though it was deliberately designed to be flexible.  The push to make some websites behave the way marketing departments wanted (far outside the initial capabilities of the web), along with the messes created during the Browser Wars led to some facets of the web today:

* Certain web features have never gotten much attention or use, some features you'd expect don't exist, and some "routine" tasks are much more involved than you would expect.
* Standards are important for both browsers and developers to follow.  Browsers are very "tolerant" - they accept technically wrong input and do a decent job of making it work anyway(usually), but it is risky to rely on tolerance being the same between browsers, or even relying on tolerance at all.
* It is important that users update browsers often, and that browsers adopt new features and standards often.  The major browsers today are all "evergreen" - they do regular rolling updates that default to happening automatically - because we've learned that web progress will stagnate otherwise.

### Protocols
Bear with me, this is going somewhere:

Most everyone knows that computers use binary.  1s and 0s.  But what does that mean?  Very little, by itself.  The value 1000001 has no inherit meaning.  We could say it means "A", or "pi", or "Open the bay doors, Hal".  The meaning only comes when you have a decided way to interpret those values.

This is a pattern that repeats in computing, over and over, in layers built upon the previous ones.  This is similar to some human languages: A letter does not exist until we define it.  We can put these letters together, but that has no effect until we define 'words' and give them meaning.  We create rules for chaining words together, and have "sentences".  Collect enough sentences and you have this document.  The thought you are having reading this sentence seems pretty disconnected from the letters involved...but it is built on top of that layer.  Some languages have letters in common, and even some words, but the same collection of letters that carry meaning in one language may be gibberish, or even carry a different meaning in another language.

When data goes between computers, it is meaningless unless one applies a set of definitions.  That definition is known as a "protocol".  And protocols might be built on the blocks of other protocols.

For our purposes (See?  I told you this was going somewhere) the Internet is connected via TCP/IP, which sets rules to pass data between computers, and how to get a message to a specific computer by way of other computers.  Each node on the internet has an "IP Address" that functions much like a postal address.  The web uses HTTP (HyperText Transfer Protocol), which assumes you have some system for passing messages between computers and is only concerned with rules for interpreting web traffic, however it is sent.

Sidenote: The representation of data itself, such as "A", is a discussion for elsewhere, but that definition is not a protocol.

### HTTP (HyperText Transfer Protocol
HTTP is a client-server protocol, meaning that something has data (server), and something else requests that data (client).  HTTP is also a "stateless" protocol, meaning that each request/response transaction is managed without relying on any other request/response transaction.  Flipping a coin is also stateless: Each time you flip, your odds are not based on previous flips.

There have been a few changes to the HTTP protocol over the years.  Because you don't want to have confusion as to what rules you are using, the protocol changes are given version numbers.  Today HTTP 1.1 is very common, with HTTP 2 starting to gain.

A server provides content in response to requests.  It sits there, usually available to some network, just waiting for a request.  You can have servers for all sorts of data, but in a class about the web we will tend to use "server" and "web server" interchangeably.  Confusingly, the machine (physical or virtual) a web server is running on is ALSO often called a "server".  

A client requests data.  For the situations we're starting with, the web browser ("browser) is the client. If a browser requests to get the root page on google.com, the request goes out, and the web server that gets the request provides a response.  In this case, that response is an HTML page.

We are focused on web pages for the browser in this document, but HTTP is used to send other data beyond what is described here.  Many mobile applications, desktop applications, and non-browser programs all routinely request data and get their response via HTTP.

### HTML (HyperText Markup Language)
HTML is NOT a programming language.  It is a text-based document that contains text-based qualifiers to describe the included data.  For example:

```
<p>this is an <a href="#example">HTML example</a></p>
```
The above "markup" is some words that are labeled a "paragraph" (`<p>`), and some of the words in the paragraph are described as referring to some other location (`<a>`). 

These qualifiers ("tags") might be self-contained, or they may wrap other content (including more tags).  Tag pairs (the starting tag and the ending tag "closing tag") must be fully inside or outside all other tag pairs. Self-closing tags act as a tag pair with no content between the tags.  Some additional rules apply to certain tags, but that's a universal rule for HTML tags.  Individual tags can be given information by setting "attributes" (such as "href" above) and "properties" (basically an attribute that has no real value, it is merely present or not present. 

Browsers are very tolerant of invalid HTML (meaning they will accept the bad HTML and try to puzzle out the intended meaning), but you should make sure that your HTML is valid.  

HTML has changed over time and like with HTTP, sets of specific rules are given version numbers.  (There is a whole drama there, but this is accurate enough)   HTML5 has been the most recent standard for a few years and is mostly supported by major browsers. 

### Rendering and semantic markup 
When the browser receives HTML in response to its page request, it "renders" that HTML, creating a "document".
In a document, the tags are not shown, though they can influence the presentation of the page.  

The web ideal is to use HTML tags and structure that accurately describes your document.  In reality, many (most?) pages pick tags based on what is close to the desired appearance.  

That ideal case is known as "Semantic" HTML, and the reasons you might want to use semantic markup include: Appearance is less prone to changing when switching between clients that may have different presentation defaults, semantic markup is more easily parsed by programs, and if your tags describe what part of the document structure a portion of HTML is, semantic markup makes it easier to enter a file and find the relevant part, particularly if it is a file unfamiliar to you.

### Related files
In the course of rendering the document, the browser may come upon some tags that want to pull in other files, such as images, javascript, and CSS (covered below)

When the browser sees that it needs one of these files, it sends a request to get them to the relevant server, which may or may not be the same server the page came from, depending on what URL the file is referenced by.  When that server receives the request, it is handled just like any other request - the server doesn't know that this requested response will be used in that page, and it doesn't need to.  If an image is intended to be displayed directly or inside a page with other content, the request and response are the same.  The only differences from the previous request are that a user started the google.com request while the browser kicked off this request, and the previous response will be rendered as a document by the browser, while this response is used IN the rendering of that response.

### CSS
As noted, HTML tags are not intended to render into a particular appearance (and back when they did, people mangled their HTML to try and get a certain appearance).  The presentation of any particular tag is controlled by CSS (Cascading Style Sheet).  CSS is a collection of sets of rules ("styles") about appearance, with each set of rules having a "selector" that says which HTML elements those rules apply to.  ("Elements" are rendered HTML tags, but people will often use elements and tags mostly interchangeably)

The rules are a list of key-value pairs, where the key is a particular rule name ("property"), such as "color", and the value controls the result for that property.  Each type of element can have different styling properties, and each CSS property has a certain format or limited set of potential values.

The "Cascading" part of "Cascading Style Sheets" comes in how the CSS is applied.  Every element matching a selector gets the listed values for their appearance properties, and elements can "inherit" property values from their containing element ("parent"), which in turn might be getting that value from ITS parent.  If multiple CSS selectors apply, there is a specific method the browser uses to decide which to apply to any given element.  This means that any applied CSS property can "cascade" down to many elements, and that rules of

CSS for a page can be located inside "style" tags in the HTML, in separate files the page has a reference to, or even as a property for a given tag ("inline").

### Javascript (JS) and the DOM
Javascript is an interpreted (not compiled) programming language.  Originally built to run in browsers it has since moved other places, most notably on the desktop in the form of NodeJS.  For this document, however, we'll concern ourselves with the browser version.

JS runs in the context of the page - when you change or reload the page, any existing javascript is removed and any JS that comes with the newly loaded page executes.

JS runs on the browser (on the user's computer) rather than on the server.  From the server perspective, any javascript, CSS, or HTML it is sending out in response to requests are all just slightly different forms of text.

JS has access to a tree of nested objects and values that represent the rendered document.  This tree is known as the "DOM" (Document Object Model) and it allows JS code to read and write to it, which means the rendered document can be changed by JS without a request to any server.

JS can make requests to servers just like the browser can (subject to some security rules), and any result it gets can be used by the JS and does not automatically display or otherwise change the rendered page.  

JS is "event based", meaning that different actions from outside the JS can trigger "events", and the JS can assign "listeners/handlers" for those events.  When the JS code has finished running, the JS engine will simply loop, waiting for an event.  When an event comes in (or if one had come in while code was still running), the JS will run any handlers associated with that event. When this code is finished running, it returns to the event loop.  Event-based systems are a bit different than some programming, because you don't control the order or timing of events, so you have to write your code to accept that.

JS is "single-threaded" from the perspective of a user.  This means that, while event handlers won't run before their event is emitted, any time code is running it will run serially - one statement after another, never two sets of code running at the same time.  Being single-threaded makes event-based programming much easier, but does mean that code that takes a while prevents any other code from running.

JS acquired a bad reputation during the Browser Wars for many reasons, including:
* Differing (and sometimes buggy) implementations by vendors
* The explosive popularity of the web meant that a lot of new coders were learning and often created or exchanged sub-par code which caused poor code to be easy to find, perpetuating the problem
* JS has an unusual inheritance mechanism that can frustrate those accustomed to some other languages
* JS is dynamically-typed (meaning that any variable can hold any "type" of data), which means some wrong uses of data cannot be detected in advance (not everyone considers this to be a problem, but it definitely contributed to the reputation of JS.
* JS is weakly-typed (meaning that if an operation requires one data type and you provided a different data type, the engine will attempt to convert the data to the needed type).  This makes for less cluttered code, but can be a problem if this "coercion" gives an unexpected result.  (As with dynamic-typing, the view that this is a problem is not universally held, though it is widely held) 
* JS as a language languished without improvement for many years despite gaps in what was provided
* JS runs in the browser, and thus cannot easily make use of outside resources
* JS had very poor performance

For most of the past decade, however, there has been renewed interest in JS, which brings with it
* a wealth of learning opportunities
* experienced coders to mentor, advise, and innovate
* documented standards
* regular updates and improvements to the language 
* bundlers (more on those later) that allow you to pull together multiple JS files into one
* transpilers (more on those later) that allow you to translate different language syntax into JS
* JS engine improvements that provide one or more orders of magnitude of improvement in performance 

## Follow up

### Additional Resources
* MDN guides -  https://developer.mozilla.org/en-US/docs/Learn 
* Eloquent Javascript - http://eloquentjavascript.net/

### Self Quiz
* If I load a web page that has Javascript that contains a game of solitaire, then disconnect my computer from the internet, what impact does that have on the game?
* If you had someone with no exposure to the web at all, but familiarity with computers, how would you explain the difference between 'HTML' and 'HTTP' to them?
* Internet Explorer 6 (IE6) is blamed for a lot of the difficulty in web development for over a decade (2001-2011), even though Firefox came out in 2004 and IE7 came out in 2006.  Why?  Is this kind of problem likely to happen again?
* You are at work and co-workers are saying "the internet is down", but you are able to get email and surf the web on your phone.  What, at a high level, is probably happening?
