// 5. Practice: 10 Basic Problems
// Sum of two numbers entered by the user.

// let a = Number(prompt("enter any number"));
// let b = Number(prompt("enter any number"));
// let sum = a+b;
// console.log(sum);



// Swap two numbers using a temporary variable.

// let a1 = Number(prompt("Enter a1:"));
// let b1 = Number(prompt("Enter b1:"));
// c1 = a1;
// a1 = b1;
// b1 = c1;
// console.log("After swap: a1 =", a1, "b1 =", b1);





// Calculate the area of a triangle (base × height / 2).

// let l = Number(prompt("enter length"))
// let b = Number(prompt("enter breadthh"))

// let area = (l*b)/2
// console.log(area);



// Convert Celsius to Fahrenheit.

// let Celsius = Number(prompt("enter celcius"));
// let fahrenheit = (celsius * 9/5) + 32;
// console.log("Fahrenheit:", fahrenheit);



// Check if a number is even or odd.

// let num = Number(prompt("enter any number"));
// if(num % 2 === 0){
//     console.log("number is even");
// }
// else{
//     console.log("number is odd");
// }

// Find the largest of three numbers.


// Calculate the simple interest (P × R × T / 100).
let P = Number(prompt("enter P"));
let R = Number(prompt("enter R"));
let T = Number(prompt("enter T"));

let SI = (P*R*T) / 100;

console.log(SI);


// Reverse a number (e.g., 123 → 321).
let number = Number(prompt("Enter number to reverse:"));
let reversed = 0;
while (number > 0) {
  reversed = (reversed * 10) + (number % 10);
  number = Math.floor(number / 10);
}
console.log("Reversed number:", reversed);



// Find the square root of a number.
let square = Number(prompt("Enter a number to find square root:"));
console.log("Square root:", Math.sqrt(square));


// Check if a year is a leap year.

let year = Number(prompt("Enter a year:"));
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}