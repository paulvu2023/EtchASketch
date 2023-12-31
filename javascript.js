// n = slidervalue
let n = 16;
let color = '#FFC0CB';
let colorpicker = document.querySelector('#colorpicker');
updateGrid();
let slider = document.getElementById("myRange");
let slidervalue = document.querySelector('.slider-value');
slidervalue.textContent = '16 x 16';

slider.oninput = () => {
    slidervalue.textContent = `${slider.value} x ${slider.value}`;
    n = slider.value;
    updateGrid();
}
colorpicker.oninput = updateColor;

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clearGrid);

check = document.querySelector('#checkbox');
check.addEventListener('click', checkifchecked);

function checkifchecked() {
    if (check.checked) {
        makeRainbow();
    } else {
        makeResponsive(color);
    }
}

function updateColor() {
    color = document.querySelector('#colorpicker').value;
    makeResponsive(color);
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

function makeRainbow () {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            randomColor = "#" + randomColor;
            pixel.style.backgroundColor = randomColor;
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
