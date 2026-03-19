import { randomColor } from '../../modules/randomColor.js';

const targetElement = document.querySelector('.block');
const randomBtn = document.querySelector('.random-color');
const resetBtn = document.querySelector('.reset-btn');

randomColor({
    targetElement,
    randomBtn,
    resetBtn
})