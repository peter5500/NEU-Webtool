# JSON

Usually pronounced "Jay-sawn" - it is very close to the name Jason.

JavaScript Object Notation

## What

JSON is a text-based data interchange format.  Which is a fancy way of saying that JSON is a string that represents data.  JSON can represent nested objects/arrays/JS primitives, but cannot contain functions and cannot have circular data structures (A includes B which includes C which includes A).  It also cannot contain comments. 

## Why 

Because JSON is text, it is easy to pass between programs and even system, without regard to the language being used.  This means a Java program can pass data to a Javascript program (or the reverse), or to any other language that supports JSON.

Because HTTPv1 requests and responses have textual bodies, a text-based format is particularly useful on the web.

Alternatives to JSON include XML, YAML, CSV, and other formats.  Because of the deliberately limited syntax (which makes parsing easier, and easier is safer when accepting data from a remote system) and lack of excessive scaffolding (looking at you, XML), JSON has become quite popular.

In addition to transmitting data, JSON files are often used to hold configurations for Javascript code, much as XML is for Java or INI files for some Windows-based languages.

## Who

While most (all?) languages can convert their data to JSON, Javascript has an advantage because the datatypes being mapped are 1:1 with actual JS datatypes.

As mentioned earlier, JSON has become popular outside of Javascript as well, but remains one option of many, and is far more prevalent in web and/or JS work than in non-JS languages that aren't doing web interactions.

## How

JSON looks like javascript, with these exceptions:
* All strings, including object keys, must be double-quoted
* The JSON must represent a single outer value (Example: an array of arrays is fine because it has one root value, the outer array.  A string is fine, an object is fine, but 3 strings that are not in an array is not allowed.)
* There are no trailing commas allowed ([1,2,3,] is valid JS but invalid JSON

Given a value (even a value holding nested other values), JSON.stringify() will return the JSON string.  

Given a JSON string, JSON.parse() will return the encoded values.  

## Downsides/Limitations

JSON can't hold functions - This is fairly common among data interchange formats.

JSON can't hold comments - This makes large data structures and/or configurations hard to maintain.  

JSON has no built in schema validation - that is, given a JSON file for a specific purpose, there is no automated way to describe the data fields that should/can be included, nor any rules where value in any fields can impact the expectations of other fields. (Example: If a JSON file has `"hasGraduated": true` then the "degree":` field should be present and filled in, but it is not required when `"hasGraduated": false`.  JSON provides no standard way to describe or enforce those rules.

