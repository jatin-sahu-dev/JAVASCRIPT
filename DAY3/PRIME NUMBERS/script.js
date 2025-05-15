// 5. Prime Numbers

// 5.1 Check whether a number is prime.

// let n =  Number(prompt("enter any number"));

// if (n % 10 == 0 ){
//    console.log("it is not a prime number");
// }
// else{
//    console.log("It is prime number");
// }




// 5.2 Print all prime numbers between 1 and 100.
for (let num = 2; num <= 100; num++) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num);
  }
}


// 5.3 Find the nth prime number.
// 5.4 Count how many prime numbers are there between 1 and n.
