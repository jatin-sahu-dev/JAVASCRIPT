// Day 3: Loops – Practice Set
// 1. For, While, Do..While Loops

// 1.1 Print numbers from 1 to 10 using a for loop.

// let n = Number(prompt("enter any number"));

// for(let i=1; i<=n; i++){
//     console.log(i);
// }


// 1.2 Calculate the sum of first n natural numbers using a while loop.
// let num = Number(prompt("enter any number"));

// let i = 1;
// let sum =0;
// while(i<=num){
//     sum = sum + i;
//     i++;
// }
//     console.log(sum);



// 1.3 Reverse a given number using a do..while loop.
// let num = 40022052
// let reversed = 0

// do{
//     let rem = num%10;
//     reversed = reversed *10 + rem
//     num = Math.floor(num/10)
// }
// while(num!=0)

// console.log(reversed);





// 1.4 Find the factorial of a number using a for loop.
// let n = Number(prompt("enter any number"));
// let fac = 1;

// for(let i=1; i<=n; i++){
//     fac = fac*i;
// }
// console.log("Factorial is:", fac);



// 1.5 Find the factorial of a number using a while loop.
// let n = Number(prompt("enter any number"));
// let fact = 1;

// let i =1;
// while(i<=n){
//     fact = fact * i;
//     i++;
// }
// console.log(fact);






// 1.6 Find the factorial of a number using a do..while loop.

let n = Number(prompt("enter any number"));
let fact = 1;
let i = 1;
do{
    fact = fact *i;
    i++;
}

while(i<=n)

    console.log(fact);
