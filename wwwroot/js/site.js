// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


function startup() {
    let Noteboard = document.getElementById('Noteboard');
    let notes = Noteboard.getElementsByClassName('note');

    for (let i = 0; i < notes.length; i++) {
        let header = notes[i].getElementsByClassName("note-header")[0]
        header.addEventListener("mousedown", startDrag);

        let content = notes[i].getElementsByClassName("note-input")[0]
        content.addEventListener("dblclick", startEdit);

        let handle = notes[i].getElementsByClassName("note-handle")[0]
        handle.addEventListener("mousedown", startResize)
    }

}

function startEdit(event) {

    event.currentTarget.readOnly = false;
    alert("wo")
}

function startResize(event) {
    let curTextArea = event.currentTarget.parentElement.getElementsByClassName("note-input")[0]
    let startDragX = event.clientX

    window.addEventListener("mousemove", onDragResize)
    window.addEventListener("mouseup", stopDragResize)

    function stopDragResize(event) {
        curTextArea = null
        window.removeEventListener("mousemove", onDragResize)
    }

    function onDragResize(event) {

        let newSize = curTextArea.offsetWidth + event.movementX;
        curTextArea.style.width = `${newSize}px`

    }
}


function startDrag(event) {

    let currentNote = event.currentTarget.parentElement

    window.addEventListener("mousemove", onDragNote)
    window.addEventListener("mouseup", stopDrag);

    function stopDrag(event) {
        currentNote = null
        window.removeEventListener("mousemove", onDragNote)

    }

    function boxTest(x, y, maxX, maxY) {
        let retX = x;
        let retY = y;

        if (x < 0) { retX = 0 }
        if (x > maxX) { retX = maxX }
        if (y < 0) { retY = 0 }

        return [retX, retY]
    }

    function onDragNote(event) {

        let Noteboard = document.getElementById('Noteboard');

        let note = currentNote
        let style = window.getComputedStyle(note);

        let moveTo = boxTest(
            parseInt(style.left) + event.movementX,
            parseInt(style.top) + event.movementY,
            Noteboard.clientWidth,
            Noteboard.clientHeight)

        note.style.left = `${moveTo[0]}px`;
        note.style.top = `${moveTo[1]}px`;
    }
}

window.addEventListener('load', startup());