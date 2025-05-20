// 🔹 1. getElementById, querySelector, innerHTML
// Practice Questions:

// Create a paragraph with an id of "demo" and use JavaScript to change 
// its content to "Hello, DOM!" using getElementById.

let p = document.getElementById("demo");
p.innerHTML = "Hello, DOM";


// Use querySelector to select a div with the class .box and change 
// its innerHTML to show a <h2>Updated!</h2>.

let  div = document.querySelector(".box");
div.innerHTML = " <h2>Updated!</h2>";

// Create an HTML page with three buttons (btn1, btn2, btn3) and use getElementById to change
//  their text when clicked.

function changeText(btnId) {
    document.getElementById(btnId).innerHTML = "Clicked!";
  }


// Select a span inside a paragraph using querySelector and update its text dynamically.

 document.querySelector("span p").innerHTML = "dynamic";

 