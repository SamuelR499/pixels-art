const $ = document;
const colorSet = ['black'];
const pixelBoard = $.getElementById('pixel-board');
const generateBtn = $.getElementById('generate-board');
const boardInput = $.getElementById('board-size');
const clearBoard = $.getElementById('clear-board');
let chosenColor;

function CE(element, text, addClass, parent = $.getElementsByTagName('body')[0]) {
  const target = $.createElement(element);
  target.innerText = text;
  target.classList.add(addClass);
  parent.appendChild(target);
  return target;
}

function colorCheck(color) {
  for (let i = 0; i < colorSet.length; i += 1) {
    if (color === colorSet[i]) {
      return true;
    }
  }
  return false;
}
function generatesPalette(number) {
  for (let i = 1; i < number; i += 1) {
    const color = `rgb(
    ${Math.floor(Math.random() * (256))},
    ${Math.floor(Math.random() * (256))},
    ${Math.floor(Math.random() * (256))}
    )`;
    if (colorCheck(color) !== false) {
      i -= 1;
    } else {
      colorSet[i] = color;
    }
  }
}
function clearAll() {
  const colorDivs = $.getElementsByClassName('color');
  for (let i = 0; i < colorDivs.length; i += 1) {
    colorDivs[i].classList.remove('selected');
  }
}
function choosesColor(event) {
  const div = event.target;
  chosenColor = div.style.backgroundColor;
  clearAll();
  div.classList.add('selected');
}
function colorInitializer() {
  clearAll();
  const firstColor = $.getElementsByClassName('color')[0];
  chosenColor = firstColor.style.backgroundColor;
  firstColor.classList.add('selected');
}
function colorCellsGenerator(num) {
  generatesPalette(num);
  for (let i = 0; i < colorSet.length; i += 1) {
    const div = CE('div', '', 'color', $.getElementById('color-palette'));
    div.style.backgroundColor = colorSet[i];
    div.addEventListener('click', choosesColor);
  }
  colorInitializer();
}

//  Generates and clears board.

function changesColor(event) {
  const div = event.target;
  div.style.backgroundColor = chosenColor;
}
function fillLine(size) {
  for (let i = 0; i < size; i += 1) {
    const div = CE('div', '', 'pixel', pixelBoard);
    div.addEventListener('click', changesColor);
  }
}
function boardGenerator(size) {
  pixelBoard.style.width = `${size * (40 + (2 / window.devicePixelRatio))}px`;
  pixelBoard.style.height = `${size * (40 + (2 / window.devicePixelRatio))}px`;
  for (let i = 0; i < size; i += 1) {
    fillLine(size);
  }
}
function readsSize() {
  if (boardInput.value !== '') {
    if (boardInput.value < 5) {
      alert('Invalid range.');
      return 5;
    }
    if (boardInput.value > 50) {
      return 50;
    }
    return boardInput.value;
  }
  alert('Board inválido!');
  return 0;
}
function clears() {
  const pixels = $.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}
//  Executes code.
boardGenerator(5);
colorCellsGenerator(4);
generateBtn.addEventListener('click', () => {
  pixelBoard.innerHTML = '';
  boardGenerator(readsSize());
});
clearBoard.addEventListener('click', () => {
  clears();
});
