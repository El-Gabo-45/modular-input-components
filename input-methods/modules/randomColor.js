export function randomColor({ targetElement, randomBtn, resetBtn }) {
    if (!targetElement || !randomBtn) return;

    randomBtn.addEventListener('dblclick', () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
        targetElement.style.setProperty('--custom-color', randomColor);
        targetElement.classList.add('custom');
    })

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            targetElement.classList.remove('custom');
        })
    }
}