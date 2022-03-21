const quadroPixel = document.getElementById('pixel-board');
// console.log(quadroPixel);

for (let coluna = 0; coluna < 5; coluna++) {
    const element = document.createElement('br');
    quadroPixel.appendChild(element)

    for (linha = 0; linha < 5; linha++) {
        const px = document.createElement('div');
        px.classList = 'pixel';
        quadroPixel.appendChild(px);
        
    }
}