// ✅ 1. map() – Transforming Data
// Goal: Use map() to return a new array with modified elements.

// Practice Questions:

// You have an array of users:

const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
];
// Create an array of usernames in uppercase.
const arr = users.map((user)=>{
  return user.name.toUpperCase();
})

console.log(arr)


// Add a new property isAdult (true if age ≥ 18) to each user.

const newArr = users.map(user=>{
  if(user.age>18){
    user.isAdult = true;
    return user
  }
    else {
     isAdult = false;
     return user
    }
  
})

console.log(newArr);




// 2. filter() – Selecting Specific Items
// Goal: Use filter() to return items that meet a condition.

// Practice Questions:

// From an array of products:

const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Mouse', price: 25 },
];
// Get all products priced above ₹100.
let newPrice = products.filter(item =>{
  
    return item.price>100;
})

console.log(newPrice);


// Get all products whose name includes the letter "o".
let letter = products.filter(item =>{
  
    return item.name.toUpperCase().includes("O");
})

console.log(letter);




// 3. reduce() – Accumulating Values
// Goal: Use reduce() to combine elements into a single value.

// Practice Questions:

// Given this array of transactions:

const transactions = [
  { id: 1, amount: 100 },
  { id: 2, amount: -50 },
];
// Calculate the total balance.
const totalBal = transactions.reduce( (sum, transaction) => {
       return sum + transaction.amount;
}, 0 );

console.log("Total Balance:", totalBal);



// Count how many transactions are positive.

const positiveCount = transactions.reduce((count, transaction) => {
  return transaction.amount > 0 ? count + 1 : count;
}, 0);

console.log("Positive Transactions:", positiveCount);




// 4. find() – Getting the First Match
// Goal: Use find() to locate the first item that matches a condition.

// Practice Questions:

// Given:

const userss = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];
// Find the user with the name 'Bob'.

 const userBob = userss.find(user => user.name === "Bob");

console.log(userBob); 

// Find the first user whose name starts with "A".

const userStartsWithA = users.find(user => user.name.startsWith("A"));

console.log(userStartsWithA);  





// 5. forEach() – Executing a Function on Each Item
// Goal: Use forEach() to perform side effects (logging, modifying).

// Practice Questions:

// From an array of students:

const students = [
  { name: 'Anu', score: 85 },
  { name: 'Ravi', score: 92 },
];
// Log each student’s name and score.

students.forEach(student => {
     console.log (`${student.name} scored  ${student.score}`);
});


// Add 5 bonus marks to each student and print the new score.

students.forEach(student => {
  student.score += 5;
  console.log(`${student.name}'s new score    ${student.score}`);
});




// Bonus: Combined Usage
// Challenge Question:

// From an array of users:

// const users = [
//   { name: 'John', age: 17 },
//   { name: 'Jane', age: 21 },
//   { name: 'Mark', age: 30 },
// ];
// Filter adults (age ≥ 18), map to their names, then reduce to a single comma-separated string of names.