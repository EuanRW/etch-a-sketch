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

//CLEAR BUTTON
const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", () => {
    const allCells = document.querySelectorAll(".my-color-class");
    allCells.forEach(function (el) {
        el.classList.remove("my-color-class");
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
        // cell.innerText = c + 1;
        grid.appendChild(cell).className = "grid-item";
        cell.addEventListener("mouseover", (e) =>
            e.target.classList.add("my-color-class")
        );
    }
}

makeRows(sliderVal, sliderVal);
