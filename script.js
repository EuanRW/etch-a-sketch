//SLIDER
const slider = document.getElementById("myRange");
const output = document.getElementById("sliderValue");
let sliderVal = slider.value;
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
    sliderVal = this.value
    makeRows(sliderVal, sliderVal)
};

//GRID
const grid = document.getElementById("grid");

function removeElementsByClass(className){
    console.log("removeElementsByClass fired!")
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function makeRows(rows, cols) {
    removeElementsByClass("grid-item")
    grid.style.setProperty("--grid-rows", rows);
    grid.style.setProperty("--grid-cols", cols);
    for (c = 0; c < rows * cols; c++) {
        let cell = document.createElement("div");
        cell.innerText = c + 1;
        grid.appendChild(cell).className = "grid-item";
    }
}

makeRows(sliderVal, sliderVal);

//Delete button
const deleteButton = document.getElementById("delete");

deleteButton.addEventListener("click", () => removeElementsByClass("grid-item"));

