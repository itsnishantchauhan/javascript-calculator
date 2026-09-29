const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

function appendValue(text) {

    if (display.textContent === "0" || display.textContent === "Error 404" || display.textContent === "Infinity") {
        display.textContent = text
    } else {
        display.textContent += text;
    }

}

function clearDisplay() {
    display.textContent = "0";
}

function calculate() {
    try {
        let result = display.textContent;
        display.textContent = eval(result);
    } catch {
        display.textContent = "Error 404";
    }

}
