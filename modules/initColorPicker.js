export function initColorPicker({ targetElement, inputSelector, resetBtn }) {

    if (!targetElement || !inputSelector) return;

    inputSelector.addEventListener ('input', (e) => {
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