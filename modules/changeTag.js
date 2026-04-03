export function changeTag ({ inputElement, resetBtn, container, textClass }) {

    if (!inputElement || !resetBtn) return;

    let p = container.querySelector(`.${textClass}`);

    if (!p) {
        p = document.createElement('p');
        p.classList.add(textClass);
        container.appendChild(p);
    }

    const updateText = (value) => {
        p.textContent = value;
    }

    inputElement.addEventListener('change', (e) => {
        updateText(e.target.value);
    })

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
        updateText('');
        inputElement.value = '';
    })
    }
}