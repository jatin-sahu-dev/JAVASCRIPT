// 2. Methods: push, pop, shift, unshift, slice, splice, concat
// Practice Questions:
// push & pop
// Create an array nums = [1, 2, 3]. Use push() to add 4, then pop() to remove the last element. 
// Print the array after each step.

// let nums = [1,2,3];

// nums.push(4);

// console.log(nums)

// shift & unshift
// 2. Use shift() to remove the first element of nums. Then use unshift(0) to add 0 to the start. Print the array each time.

// let nums = [1,2,3];

// nums.shift(); 
// console.log(nums); 

// nums.unshift(0); 
// console.log(nums);


// slice
// 3. Use slice() on [10, 20, 30, 40, 50] to get a subarray containing 20, 30.

// let arr = [10, 20, 30, 40, 50];
// let subArr = arr.slice(1, 3); 
// console.log(subArr); 

// splice
// 4. Use splice() on [1, 2, 3, 4, 5] to remove 2 elements starting from index 1.

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2); 
// console.log(arr); 

// 5. Use splice() to insert 100 and 200 at index 2 without removing anything.
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2 , 100, 200); 
// console.log(arr); 



// concat
// 6. Concatenate [1, 2] and [3, 4] into a new array.

let arr1 = [1, 2];
let arr2 = [3, 4];
let newArr = arr1.concat(arr2);
console.log(newArr);



