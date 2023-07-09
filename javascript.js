// n = slidervalue
let n = 16;
updateGrid();
var slider = document.getElementById("myRange");
var slidervalue = document.querySelector('.slider-value');
slidervalue.textContent = slider.value;
slider.onchange = () => {
    slidervalue.textContent = slider.value;
    n = slider.value;
    updateGrid();
}

function updateGrid() {
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
}

const pixels = document.querySelectorAll('.pixel');
pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', () => {
        pixel.style.backgroundColor='black';
    })
});
