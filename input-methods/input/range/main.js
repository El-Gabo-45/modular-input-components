import { widthChange } from '../../modules/widthChange.js';

const blockElement = document.querySelector('.block');
widthChange(blockElement, '.range-changer', '.reset-btn');