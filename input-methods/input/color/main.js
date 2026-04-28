import { initColorPicker } from '../../../modules/initColorPicker.js';

const textElement = document.querySelector('.main-text');
initColorPicker({
    targetElement: textElement,
    inputSelector: document.querySelector('.color-picker'),
    resetBtn: document.querySelector('.reset-btn')
})