# Final Project Requirements

## Who
Can be done by yourself, or in a partnership or team (max size 5)

Can be done with your project team, with a new team, a mix, or just you

## What

You will write a web application that meets the requirements below, as well as any best practices covered in class.  So long as your application meets the spirit of the requirements you can choose most anything else - what the app does, what the app is about, outside libraries, whatever - Be creative!  (Tip: But don't get overly optimistic and try to learn too much at once)

## Why

This project is the ultimate demonstration on what you have learned, so you should make sure it does two things: 
* Meets the requirements for the class
* Makes you feel proud

You need to have enough of your work to effectively demonstrate your knowledge, so don't be too minimal or too obscure.

## How

This list + covered best practices are all you need to choose a concept.  The concept is just the purpose - you do not have to commit to any particular features, but you should be confident your concept is simple enough to do quickly, but complex enough to have more than 1 feature.  

This list is subject to tweaks and fixing oversights, but there should not be any surprises

* A single page application
* using React 16 (project does not need use create-react-app)
* deployed to heroku
* accessible so it can be used/demonstrated
* that has some means of persisting data (I have the 'crud' api available to provide very basic storage if desired)

The application will have
* The ability to login and logout  (You choose whether to have login optional or required, but logging in must cause some change in the apps functioning or data
* To see on-screen some information connected to the current user
* To see on-screen some information not restricted to one user 
* To allow a user to enter some information
* To allow a user to edit some information 
* To allow a user to delete some information
* The ability for the actions of one user to alter what another one will see (this does not require real-time updates)

The application will present
* The page must be generally attractive and effective 
* The page must provide the expectations of the common user (form validation, controls, layout conventions)
* The page must have a visual action performed when an element is clicked (beyond the click)
* The page must somewhere have a list that is notably larger than the area available - so you can't see everything at once, and must use pagination or infinite scrolling. Do NOT only use the browser CSS scrollbars (if you use them) - demonstrate using either pagination or infinite scrolling, or some other method of managing large sets of data
* The page must make use of at least one modal window of some sort, to demonstrate the use
* The page must have at least one place where it visually indicates waiting for an asynchronous activity (e.g. a 'spinner')

The application will:
* asynchronously get data that changes the display
* asynchronously send data to save
* asynchronously request a modification/replacement of some part of saved data
* use at least 2 HTTP calls to services on a different domain. The two calls may be to the same domain as each other. 
* use at least 2 different HTTP methods in explicit calls (e.g. not an `<img>` tag) but should use different HTTP methods (verbs).
* Use at least 1 HTTP call using a query string parameter
* Use at least 1 HTTP call using a body parameter
* Use at least 1 HTTP call generated from a direct fetch() call (no wrapping library around the fetch() )

The application security practices will
* demonstrate keeping passwords/secret keys out of a repository but have an easy way to provide credentials
* demonstrate at least one instance of whitelisting input
* any user input going to storage should be done to prevent easy attacks
* demonstrate that the backend does not trust data from the front end 
* Not allow for simple XSS attacks
* Never unnecessarily expose data private to a user

The application services will
* have at least 1 service HTTP endpoint that generates dynamic responses based on input
* have persistence that survives a machine restart
* make use of headers to be CORS-friendly to connections from at least 2 domains (i.e. you don't have to let everyone connect to your service, but you do have to allow more than one extra domain.)

The application code will
* demonstrate the best practices covered in class
* Adhere to some styling consistency
* Adhere to those styling rules that have been dictated in class 
* Be a good demonstration of your ability to write maintainable code
* Be written in any combination within a team (e.g. one person does frontend, two people do servers vs 3 people each to part of frontend/services
* Be assembled such that I can clone the github repository and type 'npm install' then 'npm start' to get things where I can meaningfully make modifications to the code.  (e.g. it doesn't have to install a database automatically, but it should allow me change code and try out that code.  If it requires a special editor/IDE that is fine, as long as I am able to understand the files I need to see and the package management.) 
* You are explicitly requested to have authentication information (passwords/secret keys) NOT in the repository, so it can be required before `npm start` works
The application package
* There will be a package.json at the root of the project (see below)
* The information in the package should be accurate for the code and author(s)
* The package version should use semver
* the package will include the needed dependencies
* the package will allow for `npm install` to install dependencies
* the package will have `npm start` perform something other than the default
* the package scripts will mean that `npm install` and `npm start` should give me some meaningful

The application repository
* Will be one package at the root, or if you have services as a separate server from the webservices, two package siblings inside the repository root, You should not have new packages inside other ones.  
* Will be a separate repository (teams/partners will share one)
* Only one repository per final project
* The master branch will contain your latest code
* The master branch/commit is tagged (by you) with 'final-answer' to indicate the code that is to be tested.  Once the project deadline has passed, you may not change that tag. 
* So long as the tag above is present and visible to me, you are quite welcome to continue posting updates to the project master branch.  I cannot promise it will impact your grade, but stranger things have happened.
* will showing useful and meaningful commit messages
* will include some form of branch management (method doesn't matter so long as you have some practical manner of using branches somehow to handle code changes)
* will include a README.md in markdown format that provides basic and useful information about the project.  Additional documentation is not needed but is also not discouraged.

The application is explicitly allowed to:
* Use outside CSS libraries, but I judge *your* work, so show me some
* Use outside JS libraries, but I judge *your* work, so show me some
* - Including jQuery, but it is a bad idea to mix jQuery and React
* Use outside React components, but I judge *your* work, so show me some
* Write minimal server-side code, no more than required
* Write extensive server-side code, so long as the page is a SPA
* Use external databases
* Use some other persistent storage than a traditional database, however unrealistic practices are not good
* Use external authentication providers (oAuth, Facebook, etc)
* Use any method of performing the authentication (JWT, server-side session, whatever), but insecure practices are not good
* Use websockets - but it does not fulfill many of the requirements by itself
* Use any form of bundling/transpiling/etc, so long as I can get it running myself
* Which includes TypeScript, Flow, whatever, but I must be able to recognize code quality 
* Use any code styling they wish so long as it intended to improve quality or clarity or both

