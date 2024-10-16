// Plus button to add a new element.
const button = document.querySelector(".plus-btn");

// Selecting the body for the hole page;
const bodyEl = document.querySelector("body");

// When you press the button will add a li to the list.
const list = document.querySelector(".ul-list");

// The input field where we type what we want to add to the list.
const input = document.querySelector(".input");

// Erase button with an effect so you can remove certain to do list.
const eraseButton = document.querySelector(".erase-btn");

// Button function to add a new li with the text from the input that we write in.
// If the input contains ""/ empty string it wont make a li and print out a message
function btnFunction() {
  if (input.value !== "") {
    const newItem = document.createElement("li");
    newItem.textContent = input.value;

    // Event listener for newly created to do pharagraph
    newItem.addEventListener("click", function () {
      newItem.classList.toggle("selected-element");
      newItem.classList.toggle("checked");
    });

    function isSelected() {
      if (newItem.classList.contains("selected-element")) {
        // console.log("clicked");
        newItem.remove();
      } else {
        alert("An item needs to be selected, Click on a item to select it😃");
      }
    }

    eraseButton.addEventListener("click", function () {
      isSelected();
    });

    bodyEl.addEventListener("keydown", function (event) {
      if (event.key === "Backspace") {
        isSelected();
      }
    });

    list.appendChild(newItem);
    input.value = "";
  } else if (input.value == "") {
    alert("Didn't add a new row because the input field was empty");
  }
}

button.addEventListener("click", btnFunction);

bodyEl.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    btnFunction();
  }
});
