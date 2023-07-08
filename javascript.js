const grid = document.querySelector('.grid-container');
let n = 6;
for (let i = 0; i < n; i++) {
    const row = document.createElement('div');
    row.classList.add('row-container');
    grid.appendChild(row);
    for (let j = 0; j < n; j++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        row.appendChild(pixel);
    }
}



const pixels = document.querySelectorAll('.pixel');
pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', () => {
        pixel.style.backgroundColor='black';
    })
});

