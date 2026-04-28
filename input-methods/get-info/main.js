import { ElementPropertiesExtractor } from '../../modules/elementPropertiesExtractor.js';

const el = document.querySelector('.el1');
const properties = [ 'id', 'className', 'textContent', 'display', 'color', 'fontSize', 'backgroundColor' ];
const result = document.querySelector('.result-container');
const btn = document.querySelector('.get-btn');

btn.addEventListener('click', () => {
    const data = ElementPropertiesExtractor(el, properties);

    console.log(data);

    result.textContent = JSON.stringify(data, null, 2);
})