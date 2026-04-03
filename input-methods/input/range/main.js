import { widthChange } from '../../../modules/widthChange.js';

const blockElement = document.querySelector('.block');
widthChange({
    targetElement: blockElement,
    rangeSelector: '.range-changer',
    resetSelector: '.reset-btn',
})