# Eunsoo's Notes 

## Summary

This repository contains all of the notes taken by [Eunsoo](https://github.com/eunsookim1) for the [Lighthouse Labs](https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w1/activities/145?journey_step=29) Web Development Bootcamp. 

### Table of Contents
* [Week 1](/Week_1)
  * [Day 1](/Week_1/Day_1)

1. Coercion and Truthy/Falsey
2. Item Two
3. Item Three


# Coercion and Truthy/Falsey

## Double Equals, Triple Equals, and Type Coercion
The === does not only compare two values, but also the type of those values. 
* Before comparing the values, `triple equals ===` will compare the types. 
* `Double equals ==` will attempt to force the two values to be of the same type, if possible. This is called **Type coercion**

## Truthy and Falsey
Comparing two values in JavaScript will return either `true` or `false`. But there are some situations in JavaScript, especially when using `==`, that the correct response will be the opposite of what you might expect. 
Example: 
```javascript
0 == false
```

In JavaScript, everything has an inherent Boolean value, which is commonly referred to as a  `Truthy` or `Falsey` value. In this case, even though `0` is a Number, it also holds a Falsey value. 

### Cases of Truthy and Falsey Valaues: 
#### Remember: 

```javascript
// All of the following are inherently falsey:

False
// False is False. Makes sense, right?

0
// 0 is the only falsey Number

""
// an empty string is falsey

null
// a null, or empty value, is falsey.

undefined
// an object that has not been defined is considered falsey.

NaN
// Not a Number. You'll learn more about NaN as we go on.
```

Truthy values are a fast and easy way to check conditions in our code. For example, maybe we want to save the users name to a String, but only if we don't already have something saved to `username`. 
```javascript
username = '';

if (!username) {
  username = 'Siobhan';
}
```
Since we haven't yet saved anything to `username`, it's an empty String, and therefore returns falsey, which we account for with the bang `!username`, allowing the rest of our code to run.

The same concept can be applied to Arrays. Invoking the `Array.length` property will return 0 for an empty Array, which is also a falsey value.


```javascript
shoppingList = [];

if (!shoppingList.length) {
  shoppingList.push('coconut milk');
}
```
This is a simple way to check if our Shopping List is empty, and if it is we can add some delicious coconut milk to it!


