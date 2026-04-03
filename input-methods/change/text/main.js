import { changeTag } from '../../../modules/changeTag.js';

changeTag({
    inputElement: document.querySelector('.text-generator'),
    resetBtn: document.querySelector('.reset-btn'),
    container: document.querySelector('.main-container'),
    textClass: "generated-text"
})