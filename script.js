const quadroPixel = document.getElementById('pixel-board');
const colorPalette = document.getElementById('color-palette');

const blackColor = document.getElementsByClassName('black')[0];
blackColor.style.backgroundColor ='black';

const redColor = document.getElementsByClassName('red')[0];
redColor.style.backgroundColor ='red';

const blueColor = document.getElementsByClassName('blue')[0];
blueColor.style.backgroundColor ='blue';

const greenColor = document.getElementsByClassName('green')[0];
greenColor.style.backgroundColor ='green';

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


colorPalette.addEventListener('click', alteraselected)

function alteraselected(evnt) {
    let colorSelec = document.querySelector('.selected');
    colorSelec.classList.remove('selected')
    evnt.target.classList.add('selected')
    // console.log(colorSelec.style.backgroundColor);
}
const board = document.getElementById('pixel-board');
const caixinha = document.querySelectorAll('.pixel');

function pintar (evt){
    let corAtual = document.querySelector('.selected').style.backgroundColor;
evt.target.style.backgroundColor = corAtual;
// console.log('click!' + evt);
}

board.addEventListener('click', pintar)

function clear(){
    for(i of caixinha){
        i.style.backgroundColor = 'white'
    }
    
    // console.log('btn click');
}

let btnClear = document.getElementById('clear-board');

btnClear.addEventListener('click', clear);