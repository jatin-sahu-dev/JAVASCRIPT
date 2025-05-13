// 4. Input/Output (alert, prompt, console.log)
// Ask the user for their name and greet them.

// let name = prompt("enter your name");
// console.log(name);

// Ask the user for two numbers and show their sum using alert().

// let a = prompt("enter first number");
// let b = prompt("enter second number");
// let sum = Number(a) + Number(b);
// alert("The sum is: " + sum);





// Log a welcome message in the console.
// console.log("👋 Welcome to the page!");




// Use prompt() to ask age and check if the user is above 18.

// let age = prompt("enter your age");
// if(age > 18){
//     console.log("adult")
// }
// else{
//     console.log("Not adult")
// }



// Use confirm() to ask if the user wants to continue and log their response.

// let num1 = prompt("Enter first number to multiply:");
// let num2 = prompt("Enter second number to multiply:");
// let product = Number(num1) * Number(num2);
// alert("The product is: " + product);




// Use console.error() and console.warn() for different messages.

// console.warn(" This is a warning message.");
// console.error(" This is an error message.");




// Ask for a number and check if it’s positive or negative.

 let value = prompt("Enter a number:");
value = Number(value);
if (value > 0) {
  console.log("Positive number");
} else if (value < 0) {
  console.log("Negative number");
} else {
  console.log("It's zero");
}



// Get a string input and check its length.
let Input = prompt("Enter any text:");
console.log("Length of input is:", Input.length);


// Ask for birth year and calculate age (basic version).

let birthYear = prompt("Enter your birth year:");
let currentYear = new Date().getFullYear();
let calculatedAge = currentYear - Number(birthYear);
console.log("Your age is: " + calculatedAge);

