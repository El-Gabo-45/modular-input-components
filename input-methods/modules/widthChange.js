export function widthChange(targetElement, rangeSelector, resetSelector) {
    const rangeInput = document.querySelector(rangeSelector);
    const resetBtn = document.querySelector(resetSelector);

    if (!targetElement || !rangeInput) return;

    const rootStyles = getComputedStyle(document.documentElement);
    const initialWidth = rootStyles.getPropertyValue('--initial-width').trim();

    const numericWidth = parseInt(initialWidth);

    rangeInput.value = numericWidth;

    rangeInput.addEventListener('input', (e) => {
        const newWidth = e.target.value;
        targetElement.style.width = `${newWidth}px`;
    });

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            targetElement.style.width = initialWidth;
            rangeInput.value = numericWidth;
        });
    }
}
