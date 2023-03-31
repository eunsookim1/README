# Functions

### Arrow Functions:

The left part denotes the input of a function and the right part output of that function.

Traditional anonymous function: 
```js
(function (a) { 
  return a + 100;
})


// 1. Remove the word "function and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
}

// 2. Remove the body braces and word "return" - the return is implied. 
(a) => a +100;

// 3. Remove the parameter parentheses
a => a + 100;
```
The parentheses around the parameter and the braces around the function body can only be omitted in certain cases. 
The parentheses can only be omitted if the function has a single parameter. If it has multiple parameters, no parameters or default, destructured, or rest parameters, the parentheses around the parameter list are required. 

```js
// Traditional anonymous function
(function (a, b) {
  return a + b + 100;
});
 
// Arrow function
(a, b) => a + b + 100;

const a = 4; 
const b = 2; 

// Traditional anonymous function (no parameters)
(function () {
  return a + b + 100;
});

// Arrow function (no parameters)
() => a + b + 100;
```

>The braces can only be omitted if the function directly returns an expression. If the body has additional lines of processing, the braces are required -- and so is the return keyword. Arrow functions cannot guess what or when you want to return. 

```js
// Traditional anonymous function 
(function (a, b) {
  const chuck = 42;
  return a + b + chuck;
});

// Arrow function 
(a, b) => {
  const chuck = 42;
  return a + b + chuck;
};
```

Arrow functions are always unnamed. If the arrow function needs to call itself, use a named function expression instead. You can also assign the arrow function to a variable so it has a name. 
```js
// Traditional Function
function bob(a) {
  return a + 100;
}

// Arrow function
const bob2 = (a) => a + 100;
```

#### Function Body
Arrow functions can have either a concise body or the usual block body. 
In a concise body, only a single expression is specified, which becomes the implicit return value. In a block body, you must use an explicit return statement. 
```js
const func = (x) => x * x;
// concise body syntax, implied "return"

const func2 = (x, y) => {
  return x + y; 
};
// with block body, explicit "return" needed. 
```
Returning object literals using te concise body does not work, gives out undefined. Thus must use as below: 
```js
const func = () => ({ foo: 1 });
```

## Converting a for loop to forEach
```js
const items = ['item1', 'item2', 'item3'];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}
bnvm
// after
items.forEach((item) => {
  copyItems.push(item);
});
```

Prototypes are the mechanism by which JavaScript objects inherit features from one another. 
object constructor function:
```js
//constructor function
function person () {
  this.name = 'John',
  this.age = 23
};
```
[label](https://www.tutorialsteacher.com/codeeditor?cid%3Doojs-42)
```js
// creating objects
const person1 = new Person();
const person2 = new Person();
```

In JS, every function and object has a property named prototype by default. For example, 

```js
function Person () {
  this.name = 'John'
}
```

Anonymous functions are often declared while being passed in as callbacks to other functions. Why? Because the receiving function that takes in the anonymous function will give that parameter a name anyway. 


## Filtering Using Callbacks
Another application of callback functions appears when we iterate over an array of values in order to filter down the values into a smaller list. 
<br>
<br>
JavaScript's Array offers a filter method that we can use to iterate through the elements and return either true or false - indicating whether the element should be included in the results.

# Array.prototype.filter()
The `filter()` method creates a *shallow copy*() of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function. 

#### Example
```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => wordlength > 6);
console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
```

The filter() method is an iterative method. It calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a truthy value. Array elements which do not pass the callbackFn test are not included in the new array. 
<br>
<br>
The `filter()` method is a copying method. It does not alter `this` but instead returns a shallow copy. that contains the same elements as the ones from the original array (with some filtered out). 
The `filter()` method is generic. It only expects the this value to have a length property and integer-keyed properties. 

### Syntax
> filter(callbackFn)
> filter(callbackFn, thisArg)

* a shallow copy of an object is a copy whose properties share the same references as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. 

* Deep copy, the source and the copy are completely different. 

### Examples
#### Filtering out all small values
The following examples uses `filter()` to create a filtered array that has all elements with values less than `10` removed. 

```js
function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
//filtered is [12, 130, 44]
```

#### Find all prime numbers in an array
```js
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7,8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false; 
    }
  }
  return num > 1; 
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
```
---
>JSON stands for JavaScript Object Notation.
>JSON is a lightweight data interchange format. 
>JSON is language independent.
JSON is "self-describing" and easy to understand. 

### JSON Example
This JSON syntax defines an employees object: an array of 3 employees records (objects):
```js
{
  "employees": [
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
  ]
}
```
The JSON format is syntactically identical to the code for creating JavaScript Objects. 
Because of this similarity, a JavaScript program can easily convert JSON data into native JavaScript objects. 

### JSON Syntax Rules
* Data is name/value pairs
* Data is separated by commas
* Curly braces hold objects
* Square brackets hold arrays

#### JSON Data - A Name and a Value
JSON data is written as name/value pairs, just like JavaScript Object properties. 
A name/value pair consists of a filed name (in double quotes), followed by a colon, followed by a value: 
```js
"firstName": "Jason"
```
### JSON Objects
JSON objects are written inside curly braces.
Just like in JavaScript, objects can contain multiple name/value pairs: 
{"firstName": "John", "lastName": "Doe"}

### JSON Arrays
JSON arrays are written inside square brackets.
Just like JavaScript, an array can contain objects:
```js
"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]
```
---


## Filtering invalid entries from JSON
The following examples use `filter()` to create a filterd JSON of all elements with non-zero, numeric `id`. 

 fjgh,jt## Filtering invalid entries from JSON
The following examples use `filter()` to create a filterd JSON of all elements with non-zero, numeric `id`. 
