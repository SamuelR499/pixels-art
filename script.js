const quadroPixel = document.getElementById('pixel-board');
const colorPalette = document.getElementById('color-palette');
// console.log(quadroPixel);

for (let coluna = 0; coluna < 5; coluna++) {
    const element = document.createElement('br');
    quadroPixel.appendChild(element);

    for (linha = 0; linha < 5; linha++) {
        const px = document.createElement('div');
        px.classList = 'pixel';
        quadroPixel.appendChild(px);
    }
}

// const redSquare = document.getElementsByClassName('red');
// const blueSquare = document.getElementsByClassName('blue');
// const greenSquare = document.getElementsByClassName('green');
// const blackSquare = document.getElementsByClassName('black');
// console.log(redSquare);



colorPalette.addEventListener('click', alteraselected)
function alteraselected(evnt) {
    let colorSelec = document.querySelector('.selected');
    colorSelec.classList.remove('selected')
    evnt.target.classList.add('selected')
}
