
// . Combined Logic Practice

// Problem 10: Leap Year Checker
// Check if a given year is a leap year or not.


let b = Number( prompt("enter Year :"))

if(b%4===0 && b%100 != 0 ){
    console.log("leap year")
}
else {
    console.log("Not a leap year")
}
