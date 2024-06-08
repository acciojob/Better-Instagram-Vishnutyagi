const draggables = document.querySelectorAll('.draggable');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
    draggable.addEventListener('dragover', dragOver);
    draggable.addEventListener('drop', drop);
});

let draggedElement = null;

function dragStart(event) {
    draggedElement = event.target;
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/html', event.target.innerHTML);
}

function dragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
}

function drop(event) {
    event.preventDefault();

    if (event.target.classList.contains('draggable')) {
        let temp = draggedElement.innerHTML;
        draggedElement.innerHTML = event.target.innerHTML;
        event.target.innerHTML = temp;

        let tempId = draggedElement.id;
        draggedElement.id = event.target.id;
        event.target.id = tempId;
    }
}
