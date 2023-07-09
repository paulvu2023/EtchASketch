const grid = document.querySelector('.grid');
let n = 5;
for (let i = 0; i < n; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
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

