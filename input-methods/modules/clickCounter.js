export function clickCounter(element, btn) {
    let count = 0;
    function updateText() {
        element.textContent = `${count}`
    }
    element.addEventListener('click', ()=> {
        count++;
        updateText();
    })

    if (btn) {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            count = 0;
            element.textContent = '';
        });
    }
}