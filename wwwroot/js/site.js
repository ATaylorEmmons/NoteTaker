// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


function startup() {
    let Noteboard = document.getElementById('Noteboard');
    let notes = Noteboard.getElementsByClassName('note');

    for (let i = 0; i < notes.length; i++) {
        notes[i].addEventListener("mousedown", startDrag);
    }

}


function startDrag(event) {

    let currentNote = event.currentTarget
    window.addEventListener("mousemove", onDragNote)

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

        window.addEventListener("mouseup", stopDrag);

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