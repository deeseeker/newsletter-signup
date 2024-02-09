// "use strict";
// const signForm = document.querySelector(".sign-up");
// const subscribeScreen = document.querySelector(".subscribe");
// const btnOpenMessage = document.querySelector(".button");
// const btnCloseMessage = document.querySelector(".dismiss");
// const givenEmail = document.querySelector(".given-email");
// const errorMsg = document.querySelector(".error");
// const input = document.querySelector(".input");

// const handleMessage = function () {
//   givenEmail.innerHTML = `${input.value}`;
//   signForm.classList.toggle("hidden");
//   subscribeScreen.classList.toggle("hidden");
// };
// function validar(email) {
//   var re = /\S+@\S+\.\S+/;
//   return re.test(email);
// }
// btnOpenMessage.addEventListener("click", () => {
//   if (validar(input.value) == false || input.value.length == 0) {
//     errorMsg.style.display = "block";
//     input.style.background = "hsla(4, 100%, 67%, 0.6)";
//     input.style.outline = "hsl(4, 100%, 67%,0.6)";
//     input.focus();
//   } else {
//     handleMessage();
//   }
// });

// btnCloseMessage.addEventListener("click", handleMessage);

// // document.addEventListener("keydown", function (e) {
// //   if (e.key === "Escape" && !subscribeScreen.classList.contains("hidden")) {
// //     handleMessage();
// //   }
// // });

// // function ValidateEmail(input) {
// //   const validRegex =
// //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// //   if (input.value.match(validRegex)) {
// //     btnOpenMessage.addEventListener("click", handleMessage);
// //     givenEmail.innerHTML = `${input.value}`;
// //   } else {
// //     errorMsg.classList.toggle("hidden");
// //     input.style.background = "#ff625730";
// //     input.style.outline = "#ff625730";
// //     input.focus();
// //   }
// // }

"use strict";

// Selecting elements
const signForm = document.querySelector(".sign-up");
const subscribeScreen = document.querySelector(".subscribe");
const btnOpenMessage = document.querySelector(".button");
const btnCloseMessage = document.querySelector(".dismiss");
const givenEmail = document.querySelector(".given-email");
const errorMsg = document.querySelector(".error");
const input = document.getElementById("emailInput"); // Use the email input ID

// Function to handle message display and form toggling
const handleMessage = function () {
  givenEmail.textContent = input.value; // Use textContent for security
  signForm.classList.toggle("hidden");
  subscribeScreen.classList.toggle("hidden");
};

// Event listener for opening message
btnOpenMessage.addEventListener("click", () => {
  if (!input.checkValidity()) {
    // Check validity using built-in HTML5 validation
    input.classList.add("invalid");
    error.classList.add("invalid");
    errorMsg.style.display = "block";
    input.focus();
  } else {
    handleMessage();
  }
});

// Event listener for closing message
btnCloseMessage.addEventListener("click", handleMessage);
