const bgColors=['0c635d','#1b2e35', '#114443', '#223843','#3c2c28','#2c3e44'];
const chosenBG = bgColors[Math.floor(Math.random() * bgColors.length)];

const board = document.querySelector('#board');
board.setAttribute("style",`background-color:${chosenBG}`);
