import { checker } from '../../../modules/checker.js';

checker({
    checkboxSelector: document.querySelector('.checkbox'),
    targetElement: document.querySelector('.block'),
    resetBtn: document.querySelector('.reset-btn'),
    classname: 'custom'
})