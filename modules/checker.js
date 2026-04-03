export function checker ({ checkboxSelector, targetElement, resetBtn, classname }) {

    if (!checkboxSelector || !targetElement || !classname) return;

    checkboxSelector.addEventListener('change', () => {
        targetElement.classList.toggle(classname, checkboxSelector.checked);
    })
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
        targetElement.classList.remove(classname);
        checkboxSelector.checked = false;
    })
    }
}