import { getPropertiesList } from '../../modules/getPropertiesList.js';

const el = document.querySelector('.el1');
const result = document.querySelector('.result-container');
const btn = document.querySelector('.get-btn');

btn.addEventListener('click', () => {
    const data = getPropertiesList(el);

    console.log(data);

    result.textContent = JSON.stringify(data, null, 2);
});