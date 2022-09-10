//SLIDER
const slider = document.getElementById("myRange");
const output = document.getElementById("sliderValue");
let sliderVal = slider.value;
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
    sliderVal = this.value;
    makeRows(sliderVal, sliderVal);
};

//CHANGING COLOUR BUTTONS
let currentColor = "black";
let randColorState = false;

const blackBtn = document.getElementById("blackBtn");
blackBtn.addEventListener("click", () => {
    randColorState = false;
    currentColor = "black";
});

const redBtn = document.getElementById("redBtn");
redBtn.addEventListener("click", () => {
    randColorState = false;
    currentColor = "red";
});

const greenBtn = document.getElementById("greenBtn");
greenBtn.addEventListener("click", () => {
    randColorState = false;
    currentColor = "green";
});

const blueBtn = document.getElementById("blueBtn");
blueBtn.addEventListener("click", () => {
    randColorState = false;
    currentColor = "blue";
});

//RANDOM COLOUR GENERATOR
const randBtn = document.getElementById("randBtn");
randBtn.addEventListener("click", () => {
    randColorState = true;
    currentColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
});

//CLEAR BUTTON
const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", () => {
    const allCells = document.querySelectorAll(".grid-item");
    allCells.forEach((el) => {
        console.log("Test");
        el.style.backgroundColor = "transparent";
    });
});

//GRID
const grid = document.getElementById("grid");

function removeElementsByClass(className) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function makeRows(rows, cols) {
    removeElementsByClass("grid-item");
    grid.style.setProperty("--grid-rows", rows);
    grid.style.setProperty("--grid-cols", cols);
    for (c = 0; c < rows * cols; c++) {
        let cell = document.createElement("div");
        // cell.innerText = c    + 1;
        grid.appendChild(cell).className = "grid-item";
        cell.addEventListener("mouseover", (e) => {
            if (randColorState == false) {
                e.target.style["background-color"] = currentColor;
            } else {
                e.target.style["background-color"] = currentColor;
                currentColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            }
        });
    }
}

makeRows(sliderVal, sliderVal);
