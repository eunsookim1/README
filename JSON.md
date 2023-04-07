
# JSON 

## Find all prime numbers in an array
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
>In JSON, data is represented as key-alue pairs, where the keys are strings and the values can be strings, numbers, objects, arrays, booleans, or null. 
>It is often used in web applications to transmit data in a structred way between the client and the server. 
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

