let display = document.getElementById("display");
let clear = document.getElementById("clear");
clear.style.backgroundColor = "red";
let backspace = document.getElementById("backspace");
backspace.style.backgroundColor = "red";
let percent = document.getElementById("percent");
percent.style.backgroundColor = "red";
let divide = document.getElementById("divide");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let multiply = document.getElementById("multiply");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let subtract = document.getElementById("subtract");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let add = document.getElementById("add");
let zero = document.getElementById("zero");
let dot = document.getElementById("dot");
let equal = document.getElementById("equal");

function appendToDisplay(value) {
if (display.textContent === "0") {
  display.textContent = value;
} else {
  display.textContent += value;
}
}

let buttons = document.getElementById("buttons");
buttons.addEventListener("click", (e) => {
if (e.target.id === "equal") {
  appendToDisplay(e.target.innerText + eval(display.textContent));
} else if (e.target.id === "clear") {
  display.textContent = "0";
} else if (e.target.id === "backspace") {
  if (display.textContent.length > 1) {
    display.textContent = display.textContent.substr(
      0,
      display.textContent.length - 1
    );
  } else if (display.textContent.length === 1) {
    display.textContent = "0";
  }
} else if (e.target.id === "buttons") {
  // todo
} else {
  appendToDisplay(e.target.innerText);
}

        // if (e.target.id === "clear") {
        //   display.textContent = "";
        // } else if (e.target.id === "backspace") {
        // }
      });
