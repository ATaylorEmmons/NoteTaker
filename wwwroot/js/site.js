// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


function startup() {
    let Noteboard = document.getElementById('Noteboard');
    let notes = Noteboard.getElementsByClassName('note');

    for (let i = 0; i < notes.length; i++) {
        notes[i].addEventListener("mousedown", startDrag);
        notes[i].addEventListener("mouseup", stopDrag);
    }
}

function startDrag(event) {
    let note = event.currentTarget
    note.addEventListener("mousemove", onDragNote)
}

function stopDrag(event) {
    let note = event.currentTarget
    note.removeEventListener("mousemove", onDragNote)
}

function boxTest(x, y, maxX, maxY) {
    let retX = x;
    let retY = y;

    if (x < 0) { retX = 0 }
    if (y < 0) { retY = 0 }

    return [retX, retY]
}

function onDragNote(event) {
    let Noteboard = document.getElementById('Noteboard');

    let note = event.currentTarget;
    let style = window.getComputedStyle(note);

    let moveTo = boxTest(
        parseInt(style.left) + event.movementX,
        parseInt(style.top) + event.movementY,
        Noteboard.clientWidth,
        Noteboard.clientHeight)

    note.style.left = `${moveTo[0]}px`;
    note.style.top = `${moveTo[1]}px`;
}

window.addEventListener('load', startup());