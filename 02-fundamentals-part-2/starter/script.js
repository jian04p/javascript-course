// Selecting DOM Elements
const message = document.querySelector(".message");
const button = document.querySelector("#btn");
const heading = document.querySelector("h1");
const input = document.querySelector(".guess");
const scoreValue = document.querySelector(".score-value");

// Exercise 1: Element Selection Practice
const guessInput = document.querySelector(".guess");
console.log(guessInput);

// Method 1: querySelector
const buttonQuery = document.querySelector("#btn");
// Method 2: getElementById
const buttonById = document.getElementById("btn");
console.log(buttonQuery === buttonById); // Should be true

// Select all spans
const allSpans = document.querySelectorAll("span");
console.log(allSpans);

// Select first span
const firstSpan = document.querySelector("span");
console.log(firstSpan.textContent);

// Exercise 2: Content and Style Practice
heading.textContent = "Philip";

button.style.backgroundColor = "blue";
button.style.color = "white";
button.style.padding = "10px 20px";
button.style.border = "none";
button.style.borderRadius = "5px";

input.placeholder = "Type something cool...";
message.innerHTML = "This is <strong>bold</strong> text from JavaScript!";

scoreValue.style.fontSize = "2rem";
scoreValue.style.color = "green";
scoreValue.style.fontWeight = "bold";

// Event Listeners - User Interaction
let clickCount = 0;

button.addEventListener("click", function () {
  clickCount++;
  button.textContent = `Clicked ${clickCount} times`;
  button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
});

input.addEventListener("input", function () {
  const userText = input.value;
  message.textContent = `You typed: ${userText}`;
  message.style.fontSize = `${userText.length + 10}px`;
});

input.addEventListener("keydown", function (event) {
  console.log(`Key pressed: ${event.key}`);
  if (event.key === "Enter") {
    message.textContent = `You pressed Enter! Text was: ${input.value}`;
    input.value = "";
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    message.textContent = "Reset with Escape key!";
    input.value = "";
    clickCount = 0;
    button.textContent = "Click Me!";
  }
});

// Exercise 3: Event Listener Practice
heading.addEventListener("click", function () {
  heading.style.color = "purple";
});

input.addEventListener("input", function () {
  const count = input.value.length;
  message.textContent = `Character count: ${count}`;
});

document.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    message.textContent = "Spacebar pressed!";
  }
});

button.addEventListener("mouseover", function () {
  button.textContent = "Hovering!";
});

button.addEventListener("mouseout", function () {
  button.textContent = "Click Me!";
});

heading.addEventListener("dblclick", function () {
  heading.textContent = "Double-clicked!";
  heading.style.backgroundColor = "lightblue";
});
