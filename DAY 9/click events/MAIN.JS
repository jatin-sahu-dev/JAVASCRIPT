// 🔹 1. Event Types: click, input, change, submit
// ✅ Click
// Create a button. When clicked, change the background color of the body.
// Create a list of items. When any list item is clicked, log its text.
// Toggle the visibility of an image when a button is clicked.

// ✅ Input
// Create a text input. As the user types (on input), display the typed text in real time in a <p> tag.
let text = document.querySelector("#text");
let AsliText = document.querySelector("#AsliText");

text.addEventListener("input", function(){
    let v = this.value
     AsliText.innerText = v;
})

// Create an input box that shows how many characters are typed, updating live.

let count = document.querySelector("#count");

text.addEventListener("input", function(){
    let v = this.value
    count.innerHTML = v.length;
    
})

// ✅ Change
// Create a dropdown. When the selected value changes, display the selected option below it.
var output = document.querySelector("#output");
var drop = document.querySelector("#dropdown");

drop.addEventListener("change",function(){
   output.innerHTML = drop.value;
})

// Create a checkbox. Show a message when the checkbox is checked or unchecked.

var checkbox =  document.querySelector("#checkbox");
var checkmsg =   document.querySelector("#checkmsg");

checkbox.addEventListener("change",function(){
    if(checkbox.checked){
        checkmsg.innerHTML = "checked"
    }
    else{
        checkmsg.innerHTML= "check karo na pahle"
    }
})



// ✅ Submit
// Create a simple form with name and email fields. On submission, prevent page reload and log the values.

// Show an alert saying "Form submitted!" when a form is submitted.
