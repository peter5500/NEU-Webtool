# Questions and Answers for Exam 3

## Question:  Why do I say that JS does not actually have 'classes'?  What is the distinction between a language with (real) classes and a language without?

### Answer:
 
1.
Technically, the JavaScript has no classes. Although JavaScript is an object-oriented language and has class feature, but it's just syntactic sugar over object prototypes. 
JavaScript is a prototype-based language rather than a class-based language. But since it's possible to use JavaScript like a class-based language, people often refer to the constructor functions as "classes".

2.
First, the class-based language inherit properties by following the class chain, and the language without classes inherit by following the prototype chain.

Second, the language with classes construct an object hierarchy by using class definitions to define subclasses of existing classes, whereas the other is by assigning an object as the prototype associated with a constructor function.

What's more, the language with real classes define a class with a class definition; instantiate a class with constructor methods, but the languages without classes define and create a set of objects with constructor functions.

Also, the class-based language's class and instance are distinct entities and the non class-based language's all objects can inherit from another object.


## Question:  Why is it a bad idea to directly modify the DOM when using React?

### Answer:
 
Because it will make managing state becomes very difficult once the application starts to grow bigger, especially working on a team with mutiple people. Keeping the application state in both the DOM and javascript at such a scale, will make performance, testing and refactoring much more difficult and hard to maintain, and break the consistency of React. 


## Question:  What is composition, and why is it often favored over inheritance?

### Answer:
 
Composition is a technique which allows us to combine one or more components into a newer, enhanced component capable of greater behavior. Instead of extending another class or object, composition only aims at adding new behavior.

Inheritence means we design our types around "what they are", and we design around "what they do" when using composition, which means it is more flexible and easier to use. And composition can only be used when the relation between the parent and the child is basically fixed, it is hard to make changes afterward and could go wrong easily.


## Question:  Why can code using 'import' not be run directly by NodeJS?  

### Answer:
 
Since NodeJS is using CommonJS module system, but `import` and `export` is from ES Modules. And we can use ES Modules with `.mjs` files with the `--experimental-modules` flag. 

## Question:  Why can code using 'import' or 'require' not be run directly in most browsers?

### Answer:

Because most browsers don't have the CommonJS Module system. And NodeJS solve the problem with the CommonJS module format. Browsers can only load javascript files natively using script tag in the HTML file, then the packages can be imported.

## Question:  What is a 'side-effect'?  Why do we want to minimize them?

### Answer:
 
1.
A side-effect is anything a method does besides computing and returning a value. Any change of instance or class field values is a side effect, as is drawing something on the screen, writing to a file or a network connection.

2.
The software can be easier to extend, test, refractor, debug and maintain if we minimize the side-effect.

