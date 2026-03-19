export function makeDraggable(element) {

    let position = { x: 0, y: 0 };
    let start = { x: 0, y: 0 };
    let dragging = false;

    function updatePosition(x, y) {
        element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }

    function onMouseMove(e) {
        if (!dragging) return;

        position.x = e.clientX - start.x;
        position.y = e.clientY - start.y;

        requestAnimationFrame(() => updatePosition(position.x, position.y))
    }

    function onMouseUp() {
        dragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    function onMouseDown(e) {
        if (e.button !== 0) return;

        dragging = true;

        start.x = e.clientX - position.x;
        start.y = e.clientY - position.y;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        e.preventDefault();
    }

    element.addEventListener('mousedown', onMouseDown);
}