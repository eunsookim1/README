class Pizza {

  constructor() {
    this.topping = ["cheese"];
  }

  addTopping(topping) {
    this.topping.push(topping);
  }
}

// Our pizza blueprint is now describing two methods (constructor and addtoppin) as well as property toppings. 

// You can add a method to a class with the following syntax:
class SomeClass {
  methodName(parameters) {
    // this is a method
  }
}

// To add properties to a class, simply use the `this` keyword followed by the proerty name, then assign it a value;

class SomeClass1 {
  someMethod() {
    this.hello = "hi"; // Created a property called hello
  }
}

// Any pizza object created from this `Pizza` class will have its own version of these properties and methods. This means we can call the `addTopping()` method on `pizza1` without it affecting `pizza1`. 

// Since a class is just a bluepritn for creating objects, methods like `addTopping` will exist on the instances created from the class, but not on the class itself. 

// This will not work
// That's because addTopping is a method only available to actual instances of Pizza
Pizza.addTopping();




// constructor
class Pizza {
  constructor() {
    this.toppings = ['cheese'];
  }
}