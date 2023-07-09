// n = slidervalue
let n = 16;
let color = '#FFC0CB';
updateGrid();
var slider = document.getElementById("myRange");
var slidervalue = document.querySelector('.slider-value');
slidervalue.textContent = '16 x 16';
slider.oninput = () => {
    slidervalue.textContent = `${slider.value} x ${slider.value}`;
    n = slider.value;
    updateGrid();
}

function updateColor() {
    color = document.querySelector('#colorpicker').value;
}

function updateGrid() {
    resetGrid();
    for (let i = 0; i < n; i++) {
        const grid = document.querySelector('.grid');
        const row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
        for (let j = 0; j < n; j++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            row.appendChild(pixel);
        }
    }
    makeResponsive(color);
}

function makeResponsive (color) {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor=color;
        })
    });
}

function resetGrid() {
    const grid = document.querySelector('.grid');
    grid.innerHTML = '';
}

function clearGrid() {
    updateGrid();
}

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clearGrid);