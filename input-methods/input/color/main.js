import { initColorPicker } from '../../modules/initColorPicker.js';

const textElement = document.querySelector('.main-text');
initColorPicker({
    targetElement: textElement,
    inputSelector: '.color-picker',
    resetSelector: '.reset-btn'
})