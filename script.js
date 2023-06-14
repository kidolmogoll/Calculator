document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log('readyState: "Complete"');
    initApp();
  }
});

const initApp = () => {
  // CALCULATION LOGIC

  const display = document.querySelector(".calculator-display");
  const buttons = document.querySelectorAll("td");

  buttons.forEach((btn) => {
    display.innerText = "";
    btn.addEventListener("click", () => {
      if (btn.id === "clear") {
        location.reload();
      } else if (btn.id === "backspace") {
        let string = display.innerText.toString();
        display.innerText = string.substr(0, string.length - 1);
      } else if (display.innerText != "" && btn.id === "equal") {
        const calculation = eval(display.innerText);
        display.innerText = calculation;
      } else if (display.innerText === "" && btn.id === "equal") {
        display.innerText = "Empty!";
      } else {
        const textLength = display.innerText.length;
        if (textLength >= 0 && textLength <= 12) {
          display.style.fontSize = "1.9rem";
        } else if (textLength > 12 && textLength <= 15) {
          display.style.fontSize = "1.4rem";
        } else if (textLength > 15 && textLength <= 21) {
          display.style.fontSize = "1.1rem";
          if (textLength >= 21) {
            alert("Max digit reached");
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
          }
        }
        display.innerText += btn.id;
      }
    });
  });
};
