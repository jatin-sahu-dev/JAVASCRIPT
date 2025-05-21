// 🔹 2. Form Validation Basics
// Create a form with username and password inputs.

// Username must be at least 4 characters.

// Password must be at least 6 characters.

// Show error messages below each field if invalid.

// Disable the submit button until both fields are valid.

// Validate an email field:

// If the input doesn't match an email format, show "Enter a valid email".

// Add a confirm password field. On submit, check if both passwords match. If not, show an error.

// Highlight invalid fields with a red border using JS.

let form = document.getElementById("form");
let username = document.getElementById("username");
let mail = document.getElementById("mail");
let password = document.getElementById("password");
let confirmpassword = document.getElementById("confirmpassword");
let msg = document.getElementById("msg")

