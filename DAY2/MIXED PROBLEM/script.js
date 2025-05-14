// Problem 1: Max of Three Numbers
// Input 3 numbers and print the largest.

// let a = Number(prompt("enter the number"));
// let b = Number(prompt("enter the number"));
// let c = Number(prompt("enter the number")); 

// let max = (a > b) ? (a > c ? a : c) : (b > c ? b : c);
// console.log("Max is:", max);

// Problem 2: Number Classification
// Check whether a number is positive/negative/zero and even/odd.

// let num = Number(prompt("enter the number"));

// if (num > 0) {
//   console.log("Positive");
// } else if (num < 0) {
//   console.log("Negative");
// } else {
//   console.log("Zero");
// }

// console.log(num % 2 === 0 ? "Even" : "Odd");

// Problem 3: Temperature Converter
// Input a temperature in Celsius and convert it to Fahrenheit or vice versa (ask for conversion type).




// Problem 4: BMI Calculator
// Take weight (kg) and height (m), calculate BMI and categorize:
// 	•	Underweight < 18.5
// 	•	Normal 18.5–24.9
// 	•	Overweight 25–29.9
// 	•	Obese >= 30


// let weight = Number(prompt("enter your weight"));
// let height = Number(prompt("enter your height"));

// let bmi = weight / (height * height);
// console.log("BMI:", bmi);

// if (bmi < 18.5) console.log("Underweight");
// else if (bmi < 25) console.log("Normal");
// else if (bmi < 30) console.log("Overweight");
// else console.log("Obese");


// Problem 5: Simple Login System
// Ask for username and password, and check if they match predefined values.

// let username = "admin";
// let password = "1234";

// let inputUser = "admin";
// let inputPass = "1234";

// if (inputUser === username && inputPass === password) {
//   console.log("Login successful!");
// } else {
//   console.log("Wrong username or password");
// }

// Problem 6: Traffic Light Message
// Input a traffic light color (red/yellow/green), and print action (stop/slow/go).

// let color = prompt("enter the color");

// switch(color) {
//     case 'red' : console.log("stop"); break;
//     case 'yellow' : console.log("slow"); break;
//     case 'green' : console.log("go"); break;
//     default : console.log("invalid color");
// }


// Problem 7: Character Type Checker
// Input a character and check if it’s a letter, digit, or symbol.

// let char = "#";

// if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
//   console.log("Letter");
// } else if (char >= '0' && char <= '9') {
//   console.log("Digit");
// } else {
//   console.log("Symbol");
// }

// Problem 8: Simple Interest Calculator
// Input principal, rate, and time, then calculate simple interest.

// let p = 1000;
// let r = 5;
// let t = 2;

// let si = (p * r * t) / 100;
// console.log("Simple Interest:", si);



// Problem 9: Movie Ticket Price Calculator
// Based on age:
// 	•	<13: Child – ₹100
// 	•	13–59: Adult – ₹150
// 	•	60+: Senior – ₹120

// let age = Number(prompt("enter your age"));

// if(age<13){
//     console.log("childs your ticket price is 100 rupees");
// }
// else if(age>13 && age<=59){
//     console.log("Adult your ticket price is 150 rupees");
// }
// else {
//     console.log("Senior your ticket price is 120 rupees");
// }

// Problem 10: Rock-Paper-Scissors
// Take input from user and computer (hardcoded/random), and decide winner.

let user = "rock"; 

let choices = ["rock", "paper", "scissors"];
let computer = choices[Math.floor(Math.random() * 3)];

console.log("User:", user);
console.log("Computer:", computer);

if (user === computer) {
  console.log("It's a draw!");
} else if (
  (user === "rock" && computer === "scissors") ||
  (user === "paper" && computer === "rock") ||
  (user === "scissors" && computer === "paper")
) {
  console.log("You win!");
} else {
  console.log("Computer wins!");
}