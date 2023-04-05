# Loop

## Difference between `for...in` and `for...of` 
They are used to iterate over different types of collections. 

### `for...in` --for objects
- Used to loop over the keys (or properties) of an object. It works by iterating over all enumerable properties of an object, including inherited ones. 
```js
const obj = {a: 1, b: 2, c: 3};
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}
// output: 
// a: 1
// b: 2
// c: 3
```
### `for...of`  -- for iterables
loops over the values of an iterable object, such as an array or a string. 
```js
const arr = [1, 2, 3];
for (const value of arr) {
  console.log(value);
}
// Output: 
// 1
// 2
// 3
```
Note that `for...of` does not work on objects, because objects are not iterable in JS. If you need to loop over the values of an object, you can use `Object.values(obj)` to get an array of the object's values, and then use `for...of` on the resulting array. 


## Object.values(obj) 
**Output: an array of values**

JS built-in method that returns an array of the values of an object's own enumerable properties, in the same order as that provided by a `for...in` loop. 
```js
const obj = {a: 1, b: 2, c: 3 };
const values = Object.values(obj);

console.log(values); // Output: [1, 2,3]
```

You can then use `for...of` to loop over the values in the array, like this:
```js
const obj = { a: 1, b: 2, c: 3 };
const values = Object.values(obj);
for(const value of values) {
  console.log(value);
}

// Output:
// 1
// 2
// 3
```

## map vs flatMap
```js
let arr1 = [1, 2, 3, 4];

arr1.map(x => [x *2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// only flattens out 1 level
arr1.flatMap(x => [[x *2]]);
// [[2], [4], [6], [8]]
```

Used cases:
```js
let arr1 = ["it'sSuny in", "", "California"];

arr1.map(x => x.split(" "));
// [[""it's", "suny", "in"] [""], ["California"]]

arr1.flatMap(x = x.split(" "));
// ["It's", "Sunny", "in", "", "California"]
let a1 = [4, 1, 4, 20, 16, 1, 18]
a1.flatMap( (n) =>
      (n < 0) ?      [] :
      (n % 2 == 0) ? [n] :
                     [n-1, 1]
)
// expected output: [4, 1, 4, 20, 16, 1, 18]
```

## Using Ojbect.key(obj) & nested, nested object

**to get the keys of a value within a nested, nested object**

You can chain multiple property accessors using dot notation or bracket notation. 

```js
const obj = {
  a: {
    b: {
      c: {
        d: 1,
        e: 2,
        f: 3
      }
    }
  }
};

const keys = Object.keys(obj.a.b.c);
console.log(keys); // Output: ["d", "e", "f"]
```

# How to use for...in in a nested, nested object

I can use `for...in` loops to iterate over properties in a nested, nested object by using nested loops. Here's an example. 
```js
const obj = {
  a: {
    b: {
      c: {
        d: 1,
        e: 2,
        f: 3
      }
    }
  }
};

for (let prop1 in obj) {
  console.log(`Outper property: ${prop1}`);
  for (let prop2 in obj[prop1]) {
    consle.log(` Inner property: ${prop2}`);
    for (let prop3 in obj[prop1][prop2]) {
      console.log(`    Innermost property: ${prop3}, value: ${obj[prop1][prop2][prop3]}`);
    }
  }
}
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
