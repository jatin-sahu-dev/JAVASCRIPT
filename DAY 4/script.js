// Day 4: Functions
// - Function declarations, expressions, arrow functions
// - Parameters vs arguments
// - Return values, default parameters
// - Practice: palindrome checker, armstrong number


// 1. Function Declarations, Expressions, and Arrow Functions
// Problem 1: Write a function using function declaration that calculates the square of a number.

//  function square(num) {
//   return num * num;
// }

// console.log(square(4));


// Problem 2: Write a function using function expression that returns the area of a circle, given the radius.

// let areaOfCircle = function circleArea(r){
//    return 3.14 * r *r;
// }

// console.log(circleArea(5));

// Problem 3: Convert the previous function to an arrow function.

// const areaOfCircle = (radius) => Math.PI * radius * radius;
// console.log(areaOfCircle(5));






// 2. Parameters vs Arguments
// Problem 4: Write a function that takes two numbers as parameters and returns their sum. Call the function with different arguments to test it.

// function Sum (a,b) {
//    sum = a+b;
//    return sum;
// }
// console.log(Sum(8,5));

// Problem 5: Write a function that accepts a string and a number (as parameters) and repeats the string by the given number of times. 
// Call the function with different values for the string and the number.

function repeatString(str, times) {
  return str.repeat(times);
}
console.log(repeatString("hi", 3));    
console.log(repeatString("Jatin", 2)); 



// 3. Return Values, Default Parameters
// Problem 6: Write a function that accepts a number and 
// returns its factorial. The function should return 1 if no number is passed 
// (default parameter).

function factorial(n = 1) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(factorial(5)); 
console.log(factorial());

// Problem 7: Write a function that calculates the total price of a shopping cart. 
// If no discount is provided, apply a default discount of 5%. The function should return the final price after the discount.

function totalPrice(a, d= 5) {
  let finalPrice = a - (a * d / 100);
  return finalPrice;
}

console.log(totalPrice(1000, 10));
console.log(totalPrice(500));


// 4. Practice Problems
// Problem 8: Write a function that checks if a string is a palindrome. 
// A string is a palindrome if it reads the same forwards and backwards (e.g., "madam", "racecar").


// Problem 9: Write a function that checks if a given number is an Armstrong number.
//  An Armstrong number is a number that is equal to the sum of its own digits raised to the power of the number of digits.
//  For example, 153 is an Armstrong number because 

function isArmstrong(n) {
  let str = n.toString();
  let power = str.length;
  let sum = 0;

  for (let digit of str) {
    sum += Math.pow(Number(digit), power);
  }

  return sum === n;
}

console.log(isArmstrong(153));  // true
console.log(isArmstrong(370));  // true
console.log(isArmstrong(123));  // false

// Bonus Problems for Further Practice
// Problem 10: Write a function that finds the largest number in an array of numbers.

function findLargest(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log(findLargest([3, 10, 25, 8, 7]));


// Problem 11: Write a function that counts how many vowels are in a given string.

// Problem 12: Write a function that accepts an array of numbers and returns an array with all the prime numbers in the original array.