
class NoteView {
    constructor(_noteModel) {
        this.model = _noteModel;

        //Get UI elements & Attach Events
        this.root = document.getElementById(this.model.id);

        this.header = this.root.getElementsByClassName("note-header")[0];
        this.header.addEventListener("mousedown", startDrag);

        this.content = this.root.getElementsByClassName("note-input")[0];
        this.content.addEventListener("dblclick", startEdit);

        this.handle = this.root.getElementsByClassName("note-handle")[0];
        this.handle.addEventListener("mousedown", startResize);


    }

    startEdit(event) {

        event.currentTarget.readOnly = false;
    }


    startResize(event) {
        
        let startDragX = event.clientX

        window.addEventListener("mousemove", onDragResize)
        window.addEventListener("mouseup", stopDragResize)

        function stopDragResize(event) {
            window.removeEventListener("mousemove", onDragResize)
        }

        function onDragResize(event) {

            let newSize = this.content.offsetWidth + event.movementX;
            this.content.style.width = `${newSize}px`

        }
    }



    startDrag(event) {
        window.addEventListener("mousemove", onDragNote)
        window.addEventListener("mouseup", stopDrag);


        function stopDrag(event) {
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
            let style = window.getComputedStyle(note);

            let moveTo = boxTest(
                parseInt(style.left) + event.movementX,
                parseInt(style.top) + event.movementY,
                Noteboard.clientWidth,
                Noteboard.clientHeight)

            this.root.style.left = `${moveTo[0]}px`;
            this.root.style.top = `${moveTo[1]}px`;
        }
    }

}
