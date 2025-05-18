//  3. Looping Through Arrays
// Practice Questions:

// Use a for loop to print each element in [10, 20, 30].
// let arr = [10, 20, 30] ;

// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// Use a for...of loop to calculate the sum of [1, 2, 3, 4, 5].


// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// for(let nums of arr){
//     sum = sum + nums ;
// }
//  console.log(sum);


// Use forEach() to print each fruit in ["apple", "banana", "mango"] with its index.



// 🟪 4. Practice Problems (Combining Concepts)
// Reverse an array
// Write a function reverseArray(arr) that reverses [1, 2, 3, 4] → [4, 3, 2, 1] without using .reverse().

//  let result = [];
// function reverseArray (arr){
//  for(let i = arr.length; i >=0; i--){
//      result.push(arr[i]);
//  }
//  return result;
// }

// console.log(reverseArray([1, 2, 3, 4]));


// Sum of elements
// Write a function sumArray(arr) that returns the sum of [5, 10, 15] → 30.
// function sumArray(arr) {
//   let sum = 0;
//   for (let num of arr) {
//     sum += num;
//   }
//   return sum;
// }
// console.log(sumArray([5, 10, 15]));

// Remove duplicates
// Write a function removeDuplicates(arr) that removes duplicates from [1, 2, 2, 3, 4, 4, 5] → [1, 2, 3, 4, 5].


function removeDuplicate(arr){
  let unique = [];
  for (let num of arr) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }
  return unique;
}

console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));


// Merge and sort
// Merge two arrays [3, 1] and [2, 4], then sort the final array.

let arr1 = [3,1];
let arr2 = [2,4];


// Find the maximum element
// Write a function findMax(arr) to return the maximum number in [5, 7, 2, 10, 3].

function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

console.log(findMax([5, 7, 2, 10, 3]));