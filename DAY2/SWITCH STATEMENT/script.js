// 3. switch Statement

// Problem 7: Weekday Name
// Input a number (1–7), print the corresponding weekday using switch.

// let num = Number(prompt("enter the number"));

// switch(num) {
//     case '1' : console.log("MOnday");
//     break;
//     case '2' : console.log("Tuesday");
//     break;
//     case '3' : console.log("Wednesday");
//     break;
//     case '4' : console.log("Thursday");
//     break;
//     case '5' : console.log("friday");
//     break;
//     case '6' : console.log("Saturday");
//     break;
//     case '7' : console.log("Sunday");
//     break;
//     default: console.log("Invalid day");
//     break;
// }

// Problem 8: Calculator
// Input two numbers and an operator (+, -, *, /, %) and perform calculation using switch.

// let a= Number(prompt("Enter any number"));
// let b = Number(prompt("Enter any number"));
// let operator = prompt("enter any operator");

// switch (operator){
//     case '+' : console.log(a+b);break;
//     case '-' : console.log(a-b);break;
//     case '*' : console.log(a*b);break;
//     case '/' : console.log(a/b);break;
//     case '%' : console.log(a%b);break;

//     default: console.log("Invalid operator");
// }



// Problem 9: Month Days
// Input a month number (1–12), print number of days in that month. (Ignore leap years)

let month = Number(prompt("enter the month"));

switch (month) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    console.log("31 days"); break;
  case 4: case 6: case 9: case 11:
    console.log("30 days"); break;
  case 2:
    console.log("28 days"); break; 
  default:
    console.log("Invalid month");
}
