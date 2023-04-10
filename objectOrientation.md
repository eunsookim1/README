# Object Orientation

**Object Orientation**, (OO) is the biggest concept in software development philosophy. 
Some of the popular languages today like Ruby, Java, and C# have been designed mainly for OO Programming, or "OOP".

We try to reduce duplications and encourage modularity, meaning breaking code up into sensibly divided units. 

Object-Oriented Programming is a way of writing code that encourages modularity and reduces duplication through the use of *objects*. 

## Some OO Languages
Programming languages that are predominantly OO:
- C++
- C#
- Java
- Python
- Ruby
- PHP
- Swift
- Objective-C

## Functional Programming (FP)
A different paradigm
- Erlang
- Common Lisp
- Elixir
- Haskell
- Clojure

## JavaScript?
JS has multiple paradigms, it initially popularized FP but was also OO. With ES6, it has more OOP features.
Having multiple paradigms arguably makes a language more flexible and powerful, but also tends to cause confusion among its community. 

## Conclusion:
- OO is a software development paradigm
- OO is a popular way to solve code organization, re-use and - modularity
- OO is very important to learn due to its popularity
- JavaScript is not strictly OO in the way that Java or Ruby are
- Functional Programming is an alternative paradigm, and one that JavaScript also encourages

> Paradigm: a typical example or pattern of something; a model.


---
<br>
<br>

# Simple OOP in JS
An object is a little bundle of information, known as `state`. Each property that an object has, can represent the state of that object. 
When a property's value is a function, it is called a method.
An object is not just state, but also has behaviour. It takes the form of `methods`. Some methods might modify the object, some might ask the object for information, etc. 

## this
We use `this` within a line of code as if it were variable, but it's actually a keyword, like `for` or `function`. And just like any other keyword, it has its own special functionality. `this` means nothing without context. The value of `this` is determined at the time of the call and depends on how and where it was called. 

When using `this` inside a method, `this` refers to the object that the method was called on. 

---
<br>
<br>

`npm start` is used for executing a startup script without typing its execution command. 
- it starts package.json file. 
- npm is a package manager, and node is a javascript run time. 

<br>
<br>
___

## A quick Disclaminer About Classes in JS
### Classes
Exists in almost every OO programming language. 
Not the only way to perform object orientation, *classes* are by far the most popular. 
They are simpler approach to Object Orientation. 
JavaScript's object system is based on another pattern known as *prototypes*, not classes. Classes were added to JS in Es6 and simply help us work with prototypes in an easier way. There was no concept of classes in JS before ES6 and yet the community had still been doing OOP in JS without this feature. Older JS code is therefore more likely to use prototype instead of classes. 
<br>
Introduction of classes just makes OOp in JS look and feel like OOP in other languages. **This is to say that JS mimics the behaviour of class-based or *classical* OOP languages now.**  Classes don't add any new features to JS. It's different syntax, but cannot do anything new that wasn't possible before. 
<br>
<br>

Since the release of ES6, using classes has slowly become the preferred way of doing OO in JS. 

___

<br>
<br>

# OOP Part 1: Classes & Instances
In most Object Oriented programming languages, objects and classes go hand in hand. 

## Classes are blueprints
Classes are blueprints (templates) that we use to create *instances* of objects. A class describes what the object is going to be and we can create new objects using the class. 

### Class
TO declare a class, you use the `class`keyword with the name of the class. 
```js
class Pizza {

}
```
A class name should always be a noun, and the first letter should always be capitalized. 
To create a new object from a class, we use the `new` keyword:
```js
let pizza1 = new Pizza();
let pizza2 = new Pizza();
```
`pizza` and `pizza` are pizza objects. WHen you create an object using a class, it is an *instance* of that class. So `pizza1` and `pizza2` are instances of hte `Pizza` class. 

The objects are both instances of the same class. They were created from the same class, but they are completely separate objects. Two houses made from the same blueprint are still completely separate houses after all.

```js
pizza1 === pizza2; // false
```

Right n w there is nothing inside the `Pizza` class. Our blueprint is blank, so it will just create an empty object `{}`.

## Methods and Properties
```js
class Pizza {

  constructor() {
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.topping.push(toppign);
  }

}
```

### Introduction to constructor
constructor is a special kind of method that gets executed when an object instace is created from a class. Everything inside the `Pizza`'s `construcor` method will get run for the new instance of the class when we call `new Pizza();`. This is a great plae to setup default state for new instances. The constructor is for setting default values for any new object's properties. 


The `class` pattern allows us to DRY up our code by defining the state and behaviour for all pizzas in one place instead. 

## Customizing the Constructor
Every class can have a single constructor method that will get called when an instance of that class is created. The constructor method is the best place to setup any default property values for an object. Since it's a method, we can also pass in values to the constructor method. This allows us to easily setup custom default values. 

## it's function
OOP's goals are to help us with **code organization**, **re-use** and **modularity**. 
Done through encapsulating state(properties) and behaviours(methods) that are similar into these things called objects. 

## Primitives as Objects
Each primitive in JS (excluding `symbol` which has weird rules) has a corresponding object constructor. 
``` js
typeof(true);
// 'boolean'
typeof(Boolean(true));
// => 'boolean'
typeof(new Boolea(true));
// => 'object'
```

An object constructor can be invoked with the word new,. When we call object constructos we create new, unique instances of the objects requested. When we use the object constructor to create a primitive, we run into issues when we try to compare two different strings. 

```js
const greeting = "Hello, world!" 
const objGreeting = new String("Hello, world!");

greeting == objGreeting; 
// => true

greeting === objGreeting; 
// => false
```

# conclusion
- The class syntax.
- The purpose of the new keyword and the - concept of constructor functions.
- The difference between classes and instances.
- How we are able to create new object instances with and without class.


---

<br>
<br>

# OOP Part 2: Inheritance
With *inheritance*, we can build a new class based on an existing class. 
>see inheritance.js file

A general `Person` class contains the shared code. While `Student` and `Mentor` inherit behaviour and state information from `Person` using the keyword `**extends**`. They also have their own code that reflects behaviour and info only pertaining to themselves. 

`Student` and `Mentor` are **subclasses** of the `Person` class, since they are *extensions* of that class. `Person` is the **superclass* in this relationship.

