class Pizza {

  constructor() {
    this.topping = ["cheese"];
  }

  addTopping(topping) {
    this.topping.push(topping);
  }
}

let pizza1 = new Pizza();
// console.log(pizza1);

// console.log(pizza1.topping); // ["cheese"]

pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
console.log(pizza1.topping); // ["cheese", "mushrooms", "peppers"]

let pizza2 = new Pizza();
console.log(pizza2.topping); // ["cheese"]
pizza2.addTopping("more cheese");
console.log(pizza2.topping); ["cheese", "more cheese"];



// Any new instances of `Pizza` class will really behave the same way as this:
const pizza1 = {
  toppings: ["cheese"],
  addTopping: function(topping) {
    this.toppings.push(topping);
  }
}

const pizza2 = {
  toppings: ["cheese"],
  addTopping: function(topping) {
    this.toppings.push(topping);
  }
}

