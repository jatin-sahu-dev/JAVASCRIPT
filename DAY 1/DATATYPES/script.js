// Declare a string, number, and boolean variable and print their types using typeof.

let name = "jatin";
let a = 20;
var b = true;

console.log(typeof (name));
console.log(typeof (a));
console.log(typeof (b));

//Convert a number to a string using String() and print its type.

var num = 20;
var Newnum = String(num);
console.log(typeof(Newnum));

//Convert a string "123" to a number using Number() and add 10.
 
let str = "123";
let num1 = Number(str)+10;
console.log(num1);


// Check the type of null and undefined.

let a1 = null;
console.log(typeof(a1));



//Create an object with your details (name, age, city).

let detail = {
    name : "Jatin",
    age : 21,
    city : "Bhopal"

}


//Create an array of 5 favorite colors and access the 3rd element.

let arr = [ "red", "blue", "green", "yellow", "purple"];
console.log(arr[2]);


//Write a function that returns a value. Check its type.

function add(){
    return 4;
}
console.log(typeof(add()));
console.log(add());


// Create a Symbol and check its type.
 let c = "@";

 console.log(typeof(c));