
// 3. Nested Loops (Patterns)

// 3.1 Print a half-pyramid of * of height n.

// let n = Number(prompt("enter the number"));

// for(let i =1; i<=n; i++){
//     console.log("*".repeat(i));
// }




// 3.2 Print an inverted half-pyramid of * of height n.
// let n = Number(prompt("enter the number"));

// for(let i =n; i<=1; i--){
//     console.log("*".repeat(i));
// }


// 3.3 Print a full pyramid of * with height n.

// let n = Number(prompt("enter the number"));

// for(let i =1; i<=n; i++){
//      let spaces = ' '.repeat(n - i);
//   let stars = '*'.repeat(2 * i - 1);
//   console.log(spaces + stars);
// }

// 3.4 Print a number pyramid:

// 1
// 12
// 123
// 1234

// let n = Number(prompt("enter any number"));

// for(let i =1; i<=n; i++){
//     let line = '';
//     for(let j=1; j<=i; j++){
        
//         line += j;
//     }
//     console.log(line);
// }


// 3.5 Print Pascal’s Triangle up to n rows.




// 3.6 Print the multiplication table from 1 to 10 using nested loops.

let table = Number(prompt("enter the table number"));

for(let i = 1; i<= 10; i++){

 for(let j = i;  j<=i; j++){
    console.log(j * table);
 }

}
