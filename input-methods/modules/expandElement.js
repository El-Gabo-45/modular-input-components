export function expandElement(targetElement, resetBtn) {

    let raf = null;
    let expanded = false;

    let size = {
        width: targetElement.offsetWidth,
        height: targetElement.offsetHeight
    };

    const initialSize = { ...size };

    function expand() {
        if (!expanded) return;

        size.width += 1;
        size.height += 1;

        targetElement.style.width = `${size.width}px`;
        targetElement.style.height = `${size.height}px`;

        raf = requestAnimationFrame(expand);
    }

    function onMouseDown(e) {
        e.preventDefault();
        expanded = true;

        if (!raf) {
            raf = requestAnimationFrame(expand);
        }
    }

    function onMouseUp() {
        expanded = false;
        if (raf) {
            cancelAnimationFrame(raf);
            raf = null;
        }
    }

    targetElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    if (resetBtn) {
        resetBtn.addEventListener('click', (e) => {
            e.stopPropagation();

            size = { ...initialSize };

            targetElement.style.width = `${size.width}px`;
            targetElement.style.height = `${size.height}px`;
        })
    }
}