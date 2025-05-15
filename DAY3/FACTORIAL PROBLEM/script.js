// 4. Factorial Problems
// 4.1 Calculate the factorial of a given number n.

// let n = Number(prompt("enter the num"));
// let fact = 1;

// for(let i=1; i<=n; i++){
//    fact = fact * i
   
// }
// console.log(fact);

// 4.2 Print factorials of the first n natural numbers.

let n = Number(prompt("enter the num"));
let fact = 1;

for(let i=1; i<=n; i++){
   fact = fact * i
   console.log("Factorial of", i, "is", fact);
}



// 4.3 Check whether a number is a Strong Number (sum of factorial of digits = original number).


