class Pizza {

  constructor(size, crust, flavour, dough) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
    this.flavour = flavour;
    this.dough = dough;
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }
}

// Now every time we use this class to create a new object, we can pass in a size and crust.

let pizza = new Pizza('large', 'thin');
/*
let pizza = {
  size: 'large',
  crust: 'thin',
  toppings: ["cheese"]
}
*/

let superDeluxe = new Pizza('large', 'thin', 'bbq chicken');
superDeluxe.addTopping("shrimps");
superDeluxe.addTopping('paprika');

let hawaiian = new Pizza('small', 'thin', 'hawaiian');
hawaiian.addTopping("pineapple", "ham", "cheese");


console.log(pizza);
console.log(superDeluxe);
console.log(hawaiian);


class Pizza {
  constructor() {
    this.toppings = ["cheese"];
  }
}