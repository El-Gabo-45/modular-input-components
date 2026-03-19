export function clickCounter(element, resetbtn) {
    let count = 0;
    function render () {
        element.textContent = count || '';
    }

    function increment() {
        count++;
        render();
    }

    function reset(e) {
        e.stopPropagation();
        count = 0;
        render();
    }

    document.addEventListener('click', increment);

    if (resetbtn) {
        resetbtn.addEventListener('click', reset);
    }
}