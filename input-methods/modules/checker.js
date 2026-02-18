export function checker ({ checkboxSelector, targetElement, resetSelector, classname }) {
    const checkbox = document.querySelector(checkboxSelector);
    const resetBtn = document.querySelector(resetSelector);
    const target = document.querySelector(targetElement);

    if (!checkbox || !target || !resetBtn) return;

    checkbox.addEventListener('change', (e) => {
        target.classList.toggle(classname, checkbox.checked);
    })
    resetBtn.addEventListener('click', () => {
        target.classList.remove(classname);
        checkbox.checked = false;
    })
}