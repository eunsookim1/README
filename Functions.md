# Functions

### Arrow Functions:

The left part denotes the input of a function and the right part output of that function.

Traditional anonymous function: 
```js
(function (a) { 
  return a + 100;
})
```
<br>
<br>


```js
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


<br>
<br>


## Arrow functions revisited
Not only a "shorthand" for writing small stuff. They have some very specific and useful features. 

Creating a function and passing it somewhere, and not wanting to leave the current context. That's where arrow functions come in handy. 

- Can't be used as constructs. They can't be called with `new`. 

## Anonymous Functions

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
## Arrow Functions

One of th emain differences between arrows and regular functions is that arrow functions can only be anonymous. They are not bound to any identifier. Arrow functions do not bind their own; instead they inherit the one from the parent scope, called "lexical scoping". It makes arrow functions an excellent choice in some scenarios but a terrible one in others. If you'd like to call or reuse an arrow function, you must assign it to a variable. 

Arrow functions do not declare their own scope. Arrow functions inherit parent scope. 

## 'this'
Arrow functions do not bind their own `this`, instead, they inherit the one from their parent scope, which is called "lexical scoping". This makes arrow functions to be a great choice in some scenarios but a very bad one in others. 

```js
// function definition
const myFunction = () => {
  console.log(this);
};

// call it 
myFunction();
```
With normal functions the scoped is bound to the global one by default, arrows functions, do not have their own `this` but they inherit it from the parent scope, in this case the global one. 

```js
myObject.myMehtod() // this === window or global object

const myMethod = myObject.myMethod;
myMethod() // this === window or global object
```

### Arrow functions as methods
```js
const myObject = {
  myMethod: () => {
    console.log(this);
  }
};
```


# Quiz Review
1. Best definition of a Higher-order function is: 
>A function that takes a function as an argument, or returns a function as a result. 
2. Higher-order functions allow for creation of more powerful and generalized functions. It's job is reduced in scope when you allow it to interact with other functions. 
3. Aa anonymous function is a nameless function defined inline or assigned to a variable. It may or may not be used as a callback function. 
