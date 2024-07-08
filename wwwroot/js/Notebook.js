

function onSave() {

    let updated = []

    for (let i = 0; i < app.NoteModels.length; i++) {
        if (app.NoteModels[i].updated) {
            updated.append(app.NoteModels[i])
        }
    }

    const updatedData = JSON.stringify(updated)
    //Handle async post to server

}


function initilize() {
    let t = document.getElementById('book1_outline_note1_json').textContent
    window.Notebook = {}
    let app = window.Notebook

    app.data = JSON.parse(t)
    app.NoteModels = []
    app.NoteViews = []

    for (let i = 0; i < app.data.length; i++) {
        app.NoteModels[i] = new NoteModel(app.data[i])
        app.NoteViews[i] = new NoteView(app.NoteModels[i])
    }
}