export function changeTag (inputSelector, buttonSelector, textClass) {
    const inputElement = document.querySelector(inputSelector);
    const resetBtn = document.querySelector(buttonSelector);

    if (!inputElement || !resetBtn) return;

    const parent = inputElement.parentElement;

    let p = parent.querySelector(`.${textClass}`);
    if (!p) {
        p = document.createElement('p');
        p.classList.add(textClass);
        parent.appendChild(p);
    }

    inputElement.addEventListener('change', (e) => {
        p.textContent = e.target.value;
    })

    resetBtn.addEventListener('click', () => {
        p.textContent = '';
        inputElement.value = '';
    })
}