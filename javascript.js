const pixels = document.querySelectorAll('.pixel');
pixels.forEach((pixel) => {
    pixel.addEventListener('click', () => {
        pixel.style.backgroundColor='black';
    })
});
