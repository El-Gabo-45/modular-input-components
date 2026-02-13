export function initColorPicker(targetElement, inputSelector, resetSelector) {

    const inputElement = document.querySelector(inputSelector);
    const resetBtn = document.querySelector(resetSelector);

    if (!targetElement || !inputElement) return;

    inputElement.addEventListener ('input', (e) => {
    const selectedColor = e.target.value;
    targetElement.style.setProperty('--custom-color', selectedColor);
    targetElement.classList.add('custom')
    });

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
        targetElement.classList.remove('custom');
        targetElement.style.removeProperty('--custom-color');
    })
    }
}