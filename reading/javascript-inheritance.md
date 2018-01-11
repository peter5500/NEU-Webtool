# Javascript and Inheritance

Before digging into the details, you should know that JS does inheritance differently than a lot of languages.  Each method has strengths and weaknesses, so take time to understand before making any snap judgements.

## What is Inheritance?

Inheritance is a chain of method/property lookups.  If Object A has a method or property, and Object B inherits from Object A, then attempting to access that property/method on Object B will give you Object As version, unless Object B already had its own.

This chain continues, so if Object A likewise inherited from another object, then accessing a method/property on A will fallback to that object, and accessing via Object B will first check Object A, and then whatever object A inherits from.

Example: (these are objZ, objA, and objZ)
* Object Z has method foo(), a property bar, and a property baz
* Object A inherits from Object Z
* Object A has a property bar
* Object B inherits from Object A
* Object B has a method foo()

These are all true:
* objB.foo() is the foo from Object B, because it has that
* objB.bar, is the bar from Object A, because B inherits from A
* objB.baz, is the baz from Object Z, because B inherits from A which inherits from Z
* objA.foo() is the foo from Object Z, because A inherits from Z, and B is not between them
* objA.bar is the bar from Object A, because it has that
* objA.baz is the baz from Object Z, because A inherits from Z
* objZ.foo(), objZ.bar, and objZ.baz are all the Object Z versions, because it has them and Z doesn't inherit from A or B regardless

In javascript, the object you inherit from is known as the "prototype", covered more below.

## What is a "class"?

In most languages, a 'class' is a blueprint for an object.  It declares what methods and properties an instance of that class (that is, an object) will have.  In statically-typed systems it carries a lot of information of what interfaces and other details an instance might support.  In these languages, you largely CAN'T have an object that isn't an instance of a class.

All of which doesn't exist in JS. 
* JS can make objects easily: `const foo = {};`
* JS can violate any blueprint fairly easily.   `foo.bar = 'now I have a bar';`
* JS uses 'duck typing', that is, basing decisions on what methods/properties an object has rather than worrying about what specific type the object is.  You will largely only see "typeof" used with primitive values (undefined, etc), and only see "instanceof" if someone has explicitly designed a system to be based off of types (which isn't in line with the community).

JS "classes":
* DO provide inheritance
* Are NOT required to create an object
* Do NOT inherently restrict any aspect of an "instance" object
* MAY have a constructor function (function that runs automatically on creation)
* MAY indicate what "class" was used to instantiate an object

## What you should NOT do

Please don't try to recreate another languages' inheritance system in JS.  It's been tried, many times, and usually just causes confusion.Learn to appreciate how prototypes work, and then use them or don't use them as is appropriate.  

## What is a 'prototype'?

First, a prototype is a JS object.  An actual, normal JS object, with all the rules, freedoms, and restrictions that comes from that.

Any object will have 0 or 1 prototype, though each prototype is an object and can therefore have a prototype of its own.

System-provided types already have prototypes.  Creating an instance of one of those types will inherit from those master prototypes if nothing else matches.  This is where built-in methods and properties come from: An array instance will have a prototype (known as Array.prototype), and that prototype object has various methods and properties, such as sort() or toString().  (And toString() is actually on Object.prototype, which is the prototype of Array.prototype.

It is useful to know that when we talk about prototypes, we're talking about the concept.  While occasionally specific objects used as prototypes are labeled as such (such as Array.prototype), that label is purely for humans, it has no mechanical effect, with 1 exception (see Constructor Function below).

## The four methods of JS inheritance

### Brute Force

It's very rare to do this, but it fundamentally shows how JS inheritance is put together.

```
const one = { foo: 1 };
const two = { bar: 2 };
Object.setPrototypeOf(one, two);
console.log(one.foo); // 1
console.log(one.bar); // 2
one.bar = 3;
console.log(one.bar); // 3
console.log(two.bar); // 2 (unchanged from original)
```

getPrototypeOf/setPrototypeOf are recent additions, previously a property __proto__ could be read/altered.

### Constructor Function

One of the most common and oldest way to set up inheritance.

A constructor function is a function that runs at the creation of an object.  Here, we create such a function, and use the `new` keyword to instruct JS to create a new object, set the prototype, and so forth.

By convention (not language requirement) constructor functions begin with a capital letter rather than being camelCase.

```
const ExampleOne = function() {
  // Nothing NEEDS to be here
};
const one = new ExampleOne();
```

Constructor functions can take arguments:
```
const ExampleTwo = function( word ) {
  console.log(word);
};
const two = new ExampleTwo('cats'); // logs 'cats'
```

Constructor functions will run with 'this' being the newly created object, so you can save anything passed to or calculated by the constructor:
```
const ExampleThree = function( word ) {
  this.word = word;
};
const three = new ExampleThree('fur');
console.log(three.word); // 'fur'
```

Constructor functions will ALSO set any object named "prototype" on that function (by default an empty object) to be the prototype for the newly created object.  Notice that the name 'prototype' here is to call out the object that will be used as the prototype for any new objects constructed this way.  Any object that is NOT a function will not have a prototype property (and if you assign one, it is just a property like any other).
```
const ExampleFour = function () {};
ExampleFour.prototype.sound = 'Meow';
const four = new ExampleFour();
console.log(four.sound); // Meow
ExampleFour.prototype.hair = 'Fur';
console.log(four.hair); // 'Fur' - the prototype is the same object, and can be altered even after instantiation.  
```

### Object.create()

Object.create() is a more simple structure - it gives you a new object with the passed object as the prototype (or no prototype if you pass null).

This runs no constructor function, and the object passed is simply set as the prototype of the new object.

```
const basis = { foo: 1 };
const instance = Object.create(basis);
console.log(instance.foo); // 1
```

### ES6 Class syntax

ES6 Class syntax is largely syntactic sugar around the other methods.  The result you get is obtainable other ways, though there are a few conveniences - it is easier to track "types", and calling methods on your prototype when you have a method of that name becomes easier.

Some people love this syntax, others shrug and use it minimally.

The syntax is subtly different from most JS - Lots of nested curly-brace delimited blocks without semicolons.  Like with constructor functions, convention is to have it be MixedCase rather than camelCase.

```
class ExampleFive {
  constructor() {
    // If you have a constructor function, it must be called constructor()
    this.count = 0;
  }
  getCount() {
    return this.count;
  }
}
const five = new ExampleFive();
console.log(five.getCount()); // 0
```

