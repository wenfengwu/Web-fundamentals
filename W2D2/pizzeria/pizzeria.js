var pizza = {
  curstType: ["deep dish", "hand tossed", "white"],
  suaceType: ["traditional", "marinara", "mayonnaise", "ketup"],
  cheeses: ["mazzoarerlla", "feta"],
  toppings: [
    "mushrooms",
    "olives",
    "onions",
    "tomato",
    "suasage",
    "cucumber",
    "lettuce",
  ],

  randomPizza: function () {
    var newPizza = {};
    newPizza.curstType =
      this.curstType[
        Math.trunc(Math.random() * (this.curstType.length - 1)) + 1
      ];
    newPizza.suaceType =
      this.suaceType[
        Math.trunc(Math.random() * (this.suaceType.length - 1)) + 1
      ];
    newPizza.cheeses =
      this.cheeses[Math.trunc(Math.random() * (this.cheeses.length - 1)) + 1];
    newPizza.toppings =
      this.toppings[Math.trunc(Math.random() * (this.toppings.length - 1)) + 1];

    return newPizza;
  },
};

function pizzaOven(curstType, suaceType, cheeses, toppings) {
  var pizza = {};
  pizza.curstType = curstType;
  pizza.suaceType = suaceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;

  return pizza;
}

var pizza1 = pizzaOven(
  "deep dish",
  "traditional",
  ["mazzoarerlla"],
  ["pepperoni", "suasage"]
);

var pizza2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mazzoarerlla", "feta"],
  ["mushrooms", "olives", "onions"]
);

var pizza3 = pizzaOven(
  "deep dish",
  "traditional",
  ["mazzoarerlla"],
  ["tomato", "suasage"]
);

var pizza4 = pizzaOven(
  "hand tossed",
  "traditional",
  ["mazzoarerlla", "feta"],
  ["cucumber", "lettuce"]
);

console.log(pizza1);

console.log(pizza2);

console.log(pizza3);

console.log(pizza4);

console.log(pizza.randomPizza());
