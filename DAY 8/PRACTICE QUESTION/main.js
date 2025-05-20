// 4. Practice Projects
// Counter:

// Create a simple counter with 3 buttons: Increment, Decrement, Reset.

let count = 0;

  function updateDisplay() {
    const display = document.getElementById("count");
    display.innerHTML = count;

    
  }

  function changeCount(num) {
    count += num;
    updateDisplay();
  }

  function resetCount() {
    count = 0;
    updateDisplay();
  }

// Display the value in the center using a <span> or <div>.



// Change the counter color: green for positive, red for negative, black for zero.

// Light/Dark Theme Toggle:

// Create a toggle button that switches the page between light mode and dark mode.

// Use classList.toggle() to switch between .light-theme and .dark-theme on the body.

// Change background color, text color accordingly.




    function toggleTheme() {
      document.body.classList.toggle("dark-theme");
      document.body.classList.toggle("light-theme");
    }
  
