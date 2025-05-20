// Practice Questions:

// Add a button that says "Click Me" and when clicked, it alerts "Button Clicked!".
//  <button onclick="alert('Button Clicked!')">Click Me</button>

// Create an input box. On pressing a key (keyup event), 
// display the typed text in a <p> tag below.

//  function showText(value) {
//     document.getElementById("output").innerHTML = value;
//   }
  
// Create a div. Add a mouseover event that changes its background color when the mouse is over it.
// let div = document.querySelector("div");
// div.addEventListener("mouseover",()=>{
//     div.style.backgroundColor = "Blue"
// })



// Create a list of items. When you click any item, it should log which item was clicked using event listeners.
 const items = document.querySelectorAll("#myList li");
  items.forEach(function(item) {
    item.addEventListener("click", function() {
      console.log("You clicked: " + item.innerHTML);
    });
  });