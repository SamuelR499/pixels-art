const quadroPixel = document.getElementById('pixel-board');
// console.log(quadroPixel);



// for(i = 0; i <25; i +=1){
//     const px = document.createElement('div');
//     px.classList = 'pixel';
//     quadroPixel.appendChild(px);
// }
for (linha = 1; linha <= 25; linha++) {
    const px = document.createElement('div');
    px.classList = 'pixel';
    quadroPixel.appendChild(px);
}