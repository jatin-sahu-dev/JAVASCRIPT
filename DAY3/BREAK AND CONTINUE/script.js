// 2. break and continue

// 2.1 Print numbers from 1 to 10, skipping multiples of 3 using continue.

// let n = Number(prompt("enter any number"));

// for(let i =1; i<=n; i++){
//     if(i%3===0){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// }



// 2.2 Print numbers from 1 to 100, but stop when the number reaches 42 using break.
// let n = Number(prompt("enter any number"));

// for(let i =1; i<=n; i++){
//     if(i===42){
//         console.warn("42 agaya ruko ");
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }

// 2.3 Find and print the first prime number greater than 100 using a loop with break.
let num = 101;

while (true) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log("First prime > 100 is:", num);
    break;
  }

  num++;
}



