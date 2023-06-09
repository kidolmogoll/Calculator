document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log('readyState: "Complete"');
    initApp();
  }
});

const initApp = () => {
  // CALCULATION LOGIC

  const display = document.querySelector(".calculator-display");
  const argument = document.querySelector(".argument");
  const result = document.querySelector(".result");
  const buttons = document.querySelectorAll("td");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.id === "clear") {
        location.reload();
      } else if (btn.id === "backspace") {
        let string = argument.innerText.toString();
        argument.innerText = string.substr(0, string.length - 1);
        if (argument.innerText === "") {
          let string = result.innerText.toString();
          result.innerText = string.substr(0, string.length - 1);
        }
      } else if (argument.innerText != "" && btn.id === "equal") {
        const calculation = eval(argument.innerText);
        result.innerText = calculation;
      } else if (argument.innerText === "" && btn.id === "equal") {
        display.innerText = "Empty!";
      } else {
        argument.innerText += btn.id;
        if (argument.innerText.length == "10") {
          argument.innerText = "Max reached";
          setTimeout(() => {
            argument.innerText = "";
          }, 500);
        }
      }
    });
  });
};
