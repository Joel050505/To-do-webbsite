// Plus button to add a new element.
const button = document.querySelector(".plus-btn");

// Create new li.
const itemClone = document.querySelector("li");

// When you press the button will add a li to the list.
const list = document.querySelector(".ul-list");

// The input field where we type what we want to add to the list.
const input = document.querySelector(".input");

// Erase button with an effect so you can remove certain to do list.
const eraseButton = document.querySelector(".erase-btn");

// Button function to add a new li with the text from the input that we write in. Its a event listener so it listens for a click and then executes the function inside of the eventlistners
button.addEventListener("click", function () {
  if (input.value !== "") {
    const newItem = document.createElement("li");
    newItem.textContent = input.value;

    // Event listener for newly created to do pharagraph
    newItem.addEventListener("click", function () {
      newItem.classList.toggle("selected-element");
      newItem.classList.toggle("checked");
    });

    eraseButton.addEventListener("click", function () {
      if (newItem.classList.contains("selected-element")) {
        console.log("clicked");
        newItem.remove();
      } else {
        console.log("didnt work");
      }
    });

    list.appendChild(newItem);
    input.value = "";
  } else {
    alert("Didn't add a new row because the input field was empty");
  }
});
