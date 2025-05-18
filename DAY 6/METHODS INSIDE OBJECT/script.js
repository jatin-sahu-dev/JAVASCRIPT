
// Problems:
// 	1.	Add a method start() to the car object that logs: “Car started”.

// let car = {
//   brand: "Honda",
//   year: 2020,

//   // 1. Method: start
//   start: function () {
//     console.log("Car started");
//   },
// }
// 	2.	Add a method getSummary() that returns a string summarizing the car (e.g. "Brand: Honda, Year: 2020").




// 	3.	Create a calculator object with methods: add(a, b), subtract(a, b), multiply(a, b), divide(a, b).


let calculator = {
  add : function (a, b) {
    return a + b;
  },

  sub : function (a, b) {
    return a - b;
  },

  mul : function (a, b) {
    return a * b;
  },

  div : function (a, b) {
    return a / b
  }
};

console.log(calculator.add(5, 3));       
console.log(calculator.sub(5, 3));  
console.log(calculator.mul(5, 3));  
console.log(calculator.div(6, 3));  
