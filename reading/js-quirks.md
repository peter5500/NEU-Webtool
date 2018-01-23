# What makes the JS language different?

Forget browsers for the moment and just look at the language.

Much of JS syntax and usage is pretty conventional.  Here are some things about JS that are unusual, though not unique:

## Interpreted vs Compiled

This distinction does not mean nearly as much as it once did, as JIT interpreters on one side and virtual machines on the other reduce the differences.

However it is fair to say that running a JS program depends on the interpreter engine at run time, not any previous compile step. 

The rise of "transpilers" (see below) further blurs the line between these concepts.

## Transpilers

"Transpilers" (transforming compilers) take in one syntax and output another.  This is done in a variety of situations:

* converting one version of JS to a different one, such as converting modern JS (ES7+) to ES3 or ES5 to run on browsers that can't or are too old to run more recent standards
* converting new or even proposed JS features that are not in any browser to code that will run in the existing engines.  This means you do not have to wait for all your customers to upgrade before you can start using new features.
* converting an alternate JS syntax into more conventional JS.  Coffeescript does this to support convenient features that the native JS language does not.  Typescript does this to provide/enforce a more strict level of data-typing. 
* converting a different language altogether into conventional JS. Clojurescript is a version of the Clojure language that will transpile into JS.  Clojure is in the LISP family, so the syntax is very different.

## Not yet a real module system

Every language has the ability to bring together multiple source files into one application, right?  Enh.  JS on the web can pull in additional files from elsewhere on the web, but that's not the same.  NodeJS added a means to dynamically load files off the filesystem and is a basic module system.  Bundlers are programs that will collect multiple JS files into one, allowing you to write code in the NodeJS style and then bundle it for use on the web.  

Eventually a standard module concept and syntax was agreed to...and it wasn't the Node one.  Currently there is only limited and experimental support for the new standard in some browsers, and the Node folks are debating the best way to implement the new syntax without breaking all their existing users.

## Different Engines

Many languages have different interpreters/compilers available.  With JS, however, it is much more common that the same code will be sent to multiple interpreters from different vendors, such as when a website has visitors from IE, Chrome, and Safari, and possibly different versions of each, plus less common JS engines.

### Can't trust advice that is not very recent
During the Dark Ages following the early Browser Wars few standards were well defined or supported, and no real language updates occurred.  Later Firefox, Chrome, and Safari picked up from their predecessors and brought about a new Golden Age where we have standards and "evergreen" browsers so that most users update their JS engines (browsers) automatically.

One fallout of the decade or so of struggle is that many workarounds and hacks were found to trick various engines into behaving similarly.  Other features were downplayed as not yet universally supported or convenient concepts made inconvenient because of some crufty exception.  This means when you are searching around online for information and answers you need to be very cautious of any advice that is more than 2-3 years old, and even some of that advice can parrot concerns that are no longer valid for most cases.

### The DOM
The DOM (Document Object Model) is a programmatic representation/interface to a rendered webpage.  That is, it's a library that interacts with a web page.  The DOM is not JS syntax, just a JS library built into the browser engines (not Node), but as a lot of people learn JS a little at a time as needed, and because the early web involved less consistent implementations of the DOM, there is a lot of bad DOM-based JS code out there.  Be cautious.

## Open beats Obfuscation

Being interpreted means that if you send someone a JS program, they _have_ your code.  Because every visitor to a website has the JS sent to them for the browser to execute, this means that JS on the web is very open to inspection.

Occasionally people will try to get clever and hide ("obfuscate") the code into an unreadable mess.  This present only a minor irritation to someone trying to read the code.  Simple transformations to the code are also easy to reverse. Because the interpreter needs to be able to run the code, some form of understandable code has to reach it, code that de-obfuscates itself by definition has the means to de-obfuscate in readable code.

It almost never worth the complications for yourself to try to conceal the code from others.

### Openness and security

Two rules of web security:
1) Never trust anything (input, presumed order of steps, etc) coming from the user
2) The frontend (JS) cannot provide any security.  It can only make things convenient for those that are trying to follow the rules.  

If your JS is not sent across the internet, it may be more secure - it is a matter of where the code resides and how the permissions of that situation are.

## Accommodating Interpretation

There are some places where JS allows you to do things in a few different ways, such as accessing a property, setting an explicit context, and do comparisons.  This allows you to have more flexibility in how you express your code, which can make it inconsistent and confusing, or elegant and clear when compared to other language styles.

### ASI

Automatic Semicolon Insertion (ASI) is a "feature" of Javascript that allows almost all semicolons to be omitted.  A war battles on to this day about whether it is better to have them or omit them.

For this class you will ALWAYS use semicolons where they indicate the end of the statement.  I require this because while you CAN omit 95% of the semicolons, there are some cases where that can alter/disguise the intended result.  Rather than have you (and me) remember what that triggering situation is while also learning the rest, you will just always use the semicolons.

## Specific data types

This is not a full list of datatypes, just some unusual highlights.

### String Oddities

#### Delimiters
There are 3 different ways to declare a primitive string - single quotes (`'`), double quotes (`"`), and backticks (`\``).

Single- and double-quotes are just two different forms of deliminating strings, which means no one can decide which to use.  It does mean that a string with single quote marks inside it (such as apostrophes) can use double quotes to define the string and not have to escape the internal single quotes.  (and the reverse).

Backticks are special - these are a recent addition and denote a "template literal".  By default, it just defines another string.  Unlike the other forms it can define multi-line strings, but otherwise is just a string.  EXCEPT bling-curlies ( `${ }` ) will be replaced by the value of their contents.  So `Hi ${name}` is the same as "Hi Cat" if the variable name held the string "Cat".

#### Strings can be indexed like Arrays

"Foo"[0] is "F".  I don't see this often, but it is legit.

### Null vs Undefined

Most languages have some form of "null" value that indicates the lack of a value (where 0 _is_ a value, just the value of nothing).

JS, however, kicks it up a notch and has two such values.  Their use is not 100% consistent and they behave somewhat differently from one another, but overall `null` represents an assigned value that is not a value, while `undefined` tends to be a value that was never set to anything or to nothing.

If that feels odd, that is because that truly is odd.  Just think that you should never SET anything to be `undefined`, but you might check to see if a value has `undefined`.

### Declarations and Hoisting

There are multiple ways to declare a variable:
1. `var` declares a variable within a function.  The  `var` can appear anywhere in the function and the function will know the variable exists from the start (the declaration is effectively 'hoisted' to the top of the function), though it doesn't get assigned until that line actually executes.  One school of thought is that you should pull all your variables declarations to the top of the function, while another prefers to have all variable declarations near the point where the varible is first used.  Overall well written functions aren't too long, so the differences between these two only matter a few places.  
    * One other note about `var` - because it is function-scoped, a var declared inside a block, such as a `for` loop or an `if` block, is also defined outside that block.  This can be confusing, though a good linter can alert if there are conflicts.  As the non-`var` block-scope declarations take over this matters less and less.
    * You should not use `var` at all unless you have to use an old version of JS and can't use a transpiler.
    * when a `function` is declared as a statement rather than an expression (e.g. it is not being used as a value) the function name is the same as a var of the same name.  You cannot have a function foo() and a variable foo in the same scope - there is one variable foo, and it might hold a function or not, depending on the order of definition.
    * JS will not complain if you declare the same variable twice in the same scope.  It does not bother the code to do so, but you probably did that because you didn't realize that variable was already declared and your mistake could lead to bugss.  You must rely on a linter to catch double declarations.
1. `const` does NOT declare a constant value.  Rather, it is saying the variable being declared/assigned here will NOT be reassigned.  For primitives that does mean that they won't change values, but objects and arrays can have their contents changed as long as they themselves remain the same variable.
    * This constantcy has human benefits if you follow certain habits.  We will discuss this more when we get to readability and skimmability, but for now you should declare every variable as `const` unless you specifically must use `let` because you are re-assigning the variable a value.
    * `const` is block-scoped, meaning that if declared inside a block the variable is not visible outside of that block.
    * `const` is not hoisted - the variable is undeclared until that line executes (but don't try to use it before then, as it is in the dramatically named "temporal dead zone".
    * Attempting to change the value of a `const` variable will throw a run-time exception.
1. `let` is just like `const`, except the variable can be reassigned a new value.
    * `let` is just like `const` as far as block-scoping and not being hoisted.
    * `let` should be avoided unless needed.  Usually 80%-90% of your variables can be `const`. `let` isn't bad so much as uninformative, unless you only use `let` when you must - that tells me that a variable declared with `let` WILL be reassigned somewhere, and if I'm interested in that value, I'll have to look deeper.  `const` tells me I do not need to do so, I know what that variable will be the same variable throughout the block.
    * attempting to redeclare a `let` variable in the same scope will throw an error even though `var` would not.
1. Function parameters are named when the funciton is defined, and those names act essentially as if they were `let` variables - they can be assigned new values.
1. `class` declarations are block scoped and cannot be reassigned - they are effectively `const` variables.
A given variable can only be declared one way, though you can have variables of all types present. 


### Native Regular Expression syntax

Regular expressions are a succinct complex text interaction (search, search/replace) pattern.  That is, a string of characters is interpreted to match certain patterns in strings and possibly modify that text.  Regular Expressions are very powerful, but there are situations where they are technically wrong for the job, and situations where they are just not good for human brains.  Use appropriately.

JS has Regular Expression as a specific Object type AND has `//` delimeters to define them instead of via a constructor if you wish.  This is very handy because RegEx patterns can often get ugly in quoted strings, particularly because escape character have to be escaped in a string but not in a native RegEx declaration.  (e.g. `"1\\d\\d"` vs `/1\d\d/`)  The excessive backslashes and slashes that can be required in strings is known as LTS (Leaning Toothpick Syndrome).

# Many TODO sections

## Typing types overall


### Dynamic Typing

#### Not Much Compile Time Checking

### Weak Typing
#### Strict Comparison
#### Truthy/Falsy


## Single-Threaded (ish)
### Event loop
### Callbacks
### Promises
### Async/Await
### Generators

## Lexical Scope and Closures

## Prototypal Inheritance
### Prototype
### Different 'classes'
#### Constructor function
#### Object.create()
#### Class keyword
#### Brute Force
## 'this'
### Context
### Implict binding
### Explicit Binding
#### bind()
#### call()
#### 'fat arrow' function
