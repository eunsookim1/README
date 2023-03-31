# Study Notes

## Command Line Args

>  Command line arguments are a common way of getting user input in a program. 

Reference: [Command Line Arguments in Node.js](https://stackabuse.com/command-line-arguments-in-node-js/)

<br>

### Advantages: 

* You can pass information to an application before it starts. Useful when dealing with large number of configuration settings. 
* They are passed as strings to your program. String data types can easily be converted to other data types within an application, making the arguments very flexible. 
* You can pass unlimited number of arguments via the command line.
* Command line arguments are used in conjuction with scripts and batch files, which is useful for automated testing. 

<br>

### Disadvantages:
* It has a steep learning curve
* Only used through laptop or desktop. 

<br>
<br>

## Passing Command Line Arguments in Node.js
 ### Using process.argv
How to use arguments via the built-in way(process.argv)

<br>
<br>

## Array

### .slice()
The `slice()` method returns a shallow copy of a portion of any array into a new array object selected from `start` to `end`. `Start` and `end` represent the index of items in that array. The original array will not be modified. 

```javascript
slice()
slice(start)
slice(start, end);
```

`start`<br>
zero-based index at which to start extraction. 
* Negative index counts back from the end of the array - if `start < 0, start + array.length` is used.
* If `start < -array.length>`


<br>
<br>

## Lotide

### Library
> A "library" is a collection of pre-written code. Libraries can be private, but many are packaged up nicely, branded and made publicly available for other developers to use in their own projects. 

<br>
<p>
*jQuery* and *Bootstrap* are a couple examples of publicly available libraries used by many web developers. 
</p>
<br>


### The Lodash Library

>### **GIT**
Creating a new git repository: 

```javascript
cd lotide
git init
```

Create a new empty repository on Github called lotide and add the remote, using: 

```markdwon
git remote add origin <URL>
```

```
git add file.js
git commit -m "notes"
git remote add origin <URL>
git push -u origin master
git status
```

<br>
<br>

### console.assert()
The `console.assert()` method writes an error message to the console if the assertion is false. If the assertion is true, nothing happens. 

#### Syntax
```javascript
assert(assertion, obj1)
assert(assertion, obj1, obj2)
assert(assertion, obj1, obj2, /* ..., */ objN)

assert(assertion, msg)
assert(assertion, msg, subst1)
assert(assertion, msg, subst1, /* ..., */ substN)
```

**Parameters**
<br>
`assertion`
<br>
Any boolean expression. If the assertion is false, the message is written to the console. 

`obj1 ...objN`
<br>
A list of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output. 
<br>
<br>

`msg`
<br>
A JavaScript string containing zero or more substitution strings 
<br>
<br>


`subst1 ... substN`
JavaScript objects with which to replace substitution strings within msg. This parameter gives you additional control over the format of the output. 
<br>
<br>

#### Return Value
None. 

#### Example
```javascript
const errorMsg = "the # is not even";
for (let number = 2; number <= 5; number++) {
  console.log(`the # is ${number}`);
  console.assert(number % 2 === 0, "%o", { number, errorMsg });
}

// output:
// the # is 2
// the # is 3
// Assertion failed: {number: 3, errorMsg: "the # is not even"}
// the # is 4
// the # is 5
// Assertion failed: {number: 5, errorMsg: "the # is not even"}
```

## ES6 Template Literals

Also known as `template strings`.

### Fancier Strings

```javascript
cost name = 'Alice';
console.log('Hello, ' + name + '!'); // logs: Hello, Alice!
```

Template strings allow us to simplify this process while simultaneously being faster and using up less computer memory!

```javascript
const name = 'Alice';
console.log(`Hello, $[name]!`); // logs: Hello, Alice!
```

The strin assigned to the variable name(that is, `Alice`) is interpolated(injected) directly into the final string. 

Because template strings are a special type of string, wj n 
]yljy
e need to use **back-ticks (`).**

Allows for multi-line strings, string interpolation (to create strings by doing substitution of placeholders)with embedded expressions, and special constructs called tagged templates. 

### Syntax
```javascript
 `string text`
 `string text line 
  string text line 2`
 `string text ${expression} string text`

 tagFunction`string text ${expression} string text` 
```

To supply a function of your own, precede the template literal with a function name; the result is called a tagged template. 
<br>
To escape a backtick in a template literal, put a backslash (\) before the backtick. 

```javascript
`\`` === "`"; // true
```

<br>
Dollar signs can be escaped as welll to prevent interpolation

```javascript
`\${1} === "${1}"; // true
```

Using normal strings, you would have to use the following syntax in order to get multi-line strings:
```javascript
console.log("string text line1\n" + "string text line 2");
// "string text line 1
// "string text line 2
```

Using template literals, you can do the same with this:
```javascript
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

### String Interpolation
With template literals, you can avoid the concatenation operator and improve the readability of your code -- by using placeholders of the form ${expression} to perform substitutions for embedded expressions: 

#### Traditional script:
```javascript
const a = 5; 
const b = 10;
console.log("Fifteen is " + (a + b) + "and\nnot " + (2 * a + b) + "."); 
// "Fifteen is 15 and 
// not 20"
```

```javascript
const a = 5; 
const b = 10; 
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`); 
// Fifteen is 15 and 
// not 20."
```

Template literals coercer their expressions directly to strings, while addition coerces its operands to primitive first. 

### Nesting templates
In certain cases, nesting a template is the easiest and more readable. More configurable strings. 

##### Without template literals: 
```javascript
let classes = "header";
clases += isLargeScreen()
  ? ""
  : item.isCollaspsed
  ? " icon-expander"
  : " icon-collapser";
  ```

##### With template literal but without nesting: 
```javascript
const classes = `header ${
  isLargeScreen() ? "": item.isCollapsed? "icon-expander" : "icon-collapser"
}`;
```

##### With nesting of template literals:
```javascript
const classes = `header ${
  isLargeScreen() ? "" : `icon-${item.isCollapsed ?
  "expander" : "collapser"}`
```

<br>
<br>

## _.head(array)
Gets the first element of array.

### Since 
0.1.0

### Aliases 
`_.first`

### Arguments
`array(Array)`: The array to query.

### Returns 
`(*)`: Returns the first element of array.  

### Example
```javascript
_.head([1, 2, 3]);
// => 1

_.head([]);
// => undefined
```


## Implement Tail 
Tail means every element except the head (first element) of the array. 
[lodash](https://lodash.com/docs/4.17.15#tail)

>### _.tail(array)

### Since
4.0.0
<br>

### Arguments
`array (Array)`: The array to query.
<br>

### Returns
`(Array)`: Returns the slice of array.
<br>

### Example
```javascript
_.tail([1, 2, 3]);
// => [2, 3]
```


>JavaScript doesn't allow the use of `===` or `==` to compare two arrays. 

## Comparing Arrays
Instead of comparing arrays, compare the values of the returned tail array directly. 

# HTTP Introduction 
Covering: HTTP protocol, including URL structure, request headers, response codes, and other defining characteristics. 


#### What is HyperText
`Hypertext` is text which is not constrained to be linear. 
>Hypertext is text which contains [links](https://www.w3.org/WhatIs.html) to other texts. 
It can include graphics, video and sound. 
Hyertext and HyperMedia are concepts, not products. 

It is the `HT` in `HTTP` and `HTML`, and its origins date back to the 1960's. 


### HTTP Flow
HTTP is a protocol used to read and write "resources" (data) in a simple text-based manner. It started off as being mostly used for HTML documents, but today it's used for all sorts of documents

# Quiz Review
Question: What will be logged to the console?
```javascript
var globalScope = 'I\'m all up in your codes!';

if (true) {
  let globalScope = 'Not anymore, you\'re not!';
}
console.log(globalScope);
```

>Answer: 
<br>
I'm all up in your codes!
<br>
Correct! The `let` declaration is scoped to it's containing block, which means that our `console.log()` ignores it completely. 

<br>
<br>
Question: What will the following code output to the console?

```javascript
console.log(friend);
var friend = 'E.T.';
console.log(friend);
```
>Answer: 
<br>
```javascript
undefined
E.T.
```
>`friend` is hoisted to the top but given no value, therefore the first `console.log` will say undefined. Then, the value `"E.T."` is set to friend before the second `console.log` which will output `"E.T."`. 


## Node.js process.argv
```javascript
var result = 0;

  for (var i = 2; i < process.argv.length; i++){
    result += Number(process.argv[i]);
}
  console.log(result);
```

How I can get the values using `array destructuring syntax`. 
For example, if you run your script with: 
```javascript
node app.js arthur 35
```
you can get those values in a *more readable way* like this: 
```javascript
const [node, script, name, age] = process.argv;

console.log(node); // node
console.log(script); // app.js
console.log(name); // arthur
console.log(age); // 35
```

You can omit the first and second places of your process.argv, and stay only with name and age: 
```javascript
const [, , name, age] = process. argv; 
```

If you want all the arguments in an array, you can do it using the `rest syntax`, that *collects multiple elements and condenses them into a single element* like this: 
```javascript
const [node, script, ... params] = process.argv;

console.log(node); // node
console.log(script); // app.js
console.log(params); // [ 'arthur', '35' ]
```


and of course, you can omit the first and second places of your `process.argv` and stay only with your params: 

```javascript
const [, , ...params] = process.argv;
```



## Summary of process.argv

when you execute it like: 
```javascript
node code.js <argument> <argument>...


```
It take into account all command line invocation. 
For <code>process.argv[]</code> array will have <code>["node", "code.js","<argument>",...]</code>.
Because of that your arguments that n array start with index 2. 

<br>

# Growing Functions 
Functions can be roughly divided into those that are called for their `side effects` and those that are called for their `return value`. But it can also have both. 

The first helper function in the farm example, printZeroPaddedWithLabel, is called for its side effect: it prints a line. The second version, zeroPad, is called for its return value.

* A pure function is a specific kind of value-producing function that not only has no side effects but also doesn’t rely on side effects from other code.


### Math.random() operator
The static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1. wWith approximately uniform distribution over that range - which you can then scale to your desired range. 

```javascript
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// Expected output: 0, 1 or 2

console.log(getRandomInt(1));
// Expected output: 0

console.log(Math.random());
// Expected output: a number from 0 to <1
```
**Useful Examples**


```javascript
// 0 -> 10
Math.floor(Math.random() * 11);

// 1 -> 10
Math.floor(Math.random() * 10) + 1;

// 5 -> 20
Math.floor(Math.random() * 16) + 5;

// -10 -> (-2)
Math.floor(Math.random() * 9) - 10;
```


## Global vs Local Scopes

### Question 
What will the above code output? If you're not sure, take a guess anyway and then run it in your node REPL or by pasting the code into a file and running it.

### My Answer:
```
-- Inside printMyVars --
myLocalVar is: local
myGlobalVar is: global
-- Outside of printMyVars now --
```
### Correct Answer
```
-- Inside printMyVars --
myLocalVar is: local
myGlobalVar is: global
-- Outside of printMyVars now --
ReferenceError: myLocalVar is not defined
```
>But why is it ReferenceError?



# Rules of function 
1. Give your functions precise verb/action based names
2. Use `camelCasedNames` (like this one)
3. Properly indent the function code
4. Functions should focus on a single task: returning a value or causing a side effect. Break your function into *additional smaller functions if you find it doing two or more things*
* One single task could be to compute and return a value (eg: `zeroPad`)
* Another single task could be to perform a side effect such as logging a message to the screen (eg: `printFarmInventory`)
5. Data needed by Functions should be passed in as parameters/arguments (i.e. local scope) instead of being accessed directly



It is ideal if functions try to avoid reading outer scope variables. If a function needs some information / data, then that data should instead be passed in as a parameter, making it available within the function's *inner scope*.

### Example:
The example below illustrates a good vs bad example: 

```javascript
const person = "Martha";

// BAD
const sayHelloBadly = function() {
  console.log(`Howdy, ${person}`);
}
sayHelloBadly(); // Works, but not ideal!

// GOOD
const sayHelloGoodly = function(name) {
  console.log(`Howdy, ${name}`);
}
sayHelloGoodly(person);
```
`sayHelloGoodly` in the example above takes in the name of the person as a `"parameter"` (also known as an "argument"). This is considered better than than the `sayHelloBadly` implementation which accesses the outer/global `person` information directly.

### Why?
Functions that take in parameters are more reusable, since they are less dependent on their surroundings, (i.e. their outer scope).

From the example above, we can extract the `sayHelloGoodly` function and plop drop it into another piece of code. We can't do that with `sayHelloBadly` because the `person` variable would have to come along for the ride.

<br>
<br>

# _.without(array, [values])
Creates an array excluding all given values using SameValueZero for equality comparisons. 

**Note**: Unlike _.pull, this method returns a new array.
#### Arguments
<array (Array)>: The array to inspect. 
<[values] (...*)>: The values to exclude.

#### Returns
<(Array)>: Returns the new array of filtered values. 

### Example
```javascript
_.without([2, 1, 2, 3], 1, 2); 
// => [3]
```