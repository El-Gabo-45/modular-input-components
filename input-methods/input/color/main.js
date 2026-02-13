import { initColorPicker } from '../../modules/initColorPicker.js';

const textElement = document.querySelector('.main-text');
initColorPicker(textElement, '.color-picker', '.reset-btn');