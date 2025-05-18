// 1. Create, Access, Modify Objects

// Problems:
// 	1.	Create a car object with properties: brand, model, year. Log each property.

// let car = {
//     brand : "bmw",
//     model : "bmw s series",
//     year : "2025 model"
   
// };
// console.log(car.brand);
// console.log(car.model);
// console.log(car.year);


// // 	2.	Add a new property color to the object.
// let car = {
//     brand : "bmw",
//     model : "bmw s series",
//     year : "2025 model"
   
// };

// car.color = "red";
// console.log(car);

// 	3.	Update the year to a new value.
// let car = {
//     brand : "bmw",
//     model : "bmw s series",
//     year : "2025 model"
   
// };

// car.year = "2026";
// console.log(car);



// 	4.	Delete the model property.
// let car = {
//     brand : "bmw",
//     model : "bmw s series",
//     year : "2025 model"
   
// };

// delete car.model  ;
// console.log(car);

// 	5.	Write a function printObject(obj) that logs all key-value pairs using a loop.
 
let car = {
    brand : "bmw",
    model : "bmw s series",
    year : "2025 model"
   
};
function printObject(obj) {
  for (let key in obj) {
    console.log(key + ": " + obj[key]);
  }
}

printObject(car);