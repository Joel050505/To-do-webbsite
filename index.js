// Plus button to add a new element.
const button = document.querySelector(".plus-btn");

// Selecting the body for the hole page;
const bodyEl = document.querySelector("body");

// Location to add items to
const list = document.querySelector(".ul-list");

// The input field where we type what we want to add to the list.
const input = document.querySelector(".input");

const inputField1 = document.querySelector("input");

// Erase button with an effect so you can remove certain to do list.
const eraseButton = document.querySelector(".erase-btn");

// Button function to add a new li with the text from the input that we write in.
// If the input contains ""/ empty string it wont make a li and print out a message
function btnFunction() {
  if (input.value !== "") {
    function isSelected() {
      if (
        newItem.classList.contains("selected-element") &&
        newItem.classList.contains("checked")
      ) {
        // console.log("clicked");
        newItem.remove();
      } else if (!newItem.classList.contains("selected-element")) {
        // alert("An item needs to be selected, Click on a item to select it😃");
      }
    }

    const newItem = document.createElement("li");

    newItem.textContent = input.value;
    let selectBox = document.createElement("i");
    let removeBox = document.createElement("i");
    let span = document.createElement("button");
    let icon = document.createElement("i");

    selectBox.classList.add("fa-regular", "fa-square");
    removeBox.classList.add("fa-solid", "fa-square-check");

    newItem.appendChild(selectBox);

    selectBox.addEventListener("click", function () {
      selectBox.remove();
      newItem.appendChild(removeBox);
      newItem.classList.toggle("selected-element");
      newItem.classList.toggle("checked");
    });

    removeBox.addEventListener("click", function () {
      removeBox.remove();
      newItem.appendChild(selectBox);
      newItem.classList.toggle("selected-element");
      newItem.classList.toggle("checked");
    });

    icon.classList.add("fa-solid", "fa-pen-to-square");

    span.appendChild(icon);

    span.addEventListener("click", function (event) {
      event.stopPropagation();

      let inputField = document.createElement("input");
      console.log((inputField.textContent = newItem.textContent));

      inputField.value = newItem.textContent;

      newItem.textContent = "";

      inputField.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.stopPropagation();
          console.log("worked");
          newItem.textContent = inputField.value;
          inputField.remove();
          newItem.appendChild(span);
          newItem.appendChild(selectBox);
          newItem.classList.remove("selected-element");
          newItem.classList.remove("checked");
        } else {
        }
      });

      newItem.appendChild(inputField);
    });
    newItem.appendChild(span);

    eraseButton.addEventListener("click", function () {
      isSelected();
      console.log("clicked");
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
