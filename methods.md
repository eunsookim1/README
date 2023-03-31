# Methods

## **1. Array.isArray()**

`typeof` for arrys returns "object".
 
```javascript
typeof([]) // => "object"
```
Indeed an array is technically an object, though most of the time, we don't need to think of it that way. However, the real problem here is that the same output happens for all objects, including objects that are definitely not arrays!

```javascript
typeof({}) // => "object"
```
While "object" does help us separate array data from other types like strings, numbers, and the like, it doesn't give us complete confidence that we're dealing with an array here.

Array.isArray overcomes this confusion by being a more specific check.


## **2. forEach()**
permanently modifies the original array. 

## **3. map(func)**
With the `map()` method, you can take an array, perform some operation on each element of the array, and return a new array. 

Example: 
```javascript
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(functon(donut) {
  donut += " hole"; 
  donut = donut.toUpperCase(); 
  return donut; 
});
```

>donuts array: ["jelly donut", "chocolate donut", "glazed donut"]
>improvedDonuts array: ["JELLY DONUT HOLE", "CHOCOLATE DONUT HOLE", "GLAZED DONUT HOLE"]

