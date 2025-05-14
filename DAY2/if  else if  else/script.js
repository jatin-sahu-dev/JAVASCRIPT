// 1. if / else if / else

// Problem 1: Sign Checker
// Take a number from the user and print whether it’s positive, negative, or zero.
//   let num = prompt("enter number");
//   if (num > 0){
//     console.log("number is positive");
//   }
//   else if(num < 0){
//     console.log("number is negative");
//   }
//   else {
//     console.log("zero");
//   }





// Problem 2: Voting Eligibility
// Check if a person is eligible to vote (age >= 18).

// let age = Number(prompt("enter you age"));

// if(age >=18){
//     console.log("you are eligible for vote");
// }
// else{
//     console.log("you are not eligible for vote");
// }






// Problem 3: Grading System
// Given marks (0–100), print grade:
// 	•	A (90–100)
// 	•	B (80–89)
// 	•	C (70–79)
// 	•	D (60–69)
// 	•	F (below 60)

let marks = Number(prompt("enter your marks"));
if (marks >= 90 && marks <= 100) {
  console.log("Grade: A");
} else if (marks >= 80 && marks <= 89) {
  console.log("Grade: B");
} else if (marks >= 70 && marks <= 79) {
  console.log("Grade: C");
} else if (marks >= 60 && marks <= 69) {
  console.log("Grade: D");
} else if (marks >= 0 && marks < 60) {
  console.log("Grade: F");
} else {
  console.log("Invalid marks");
}
