'use strict';

// Contains hard-coded data
// In a real application should use data from the backend
class NoteService {
    constructor() {
        this.notes = [
            {
                "id": 1,
                "title": "delectus aut autem",
                "content": "Lorem ipsum",
                "status": "New"
            },
            {
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "content": "Lorem ipsum",
                "status": "Completed"
            },
            {
                "id": 3,
                "title": "fugiat veniam minus",
                "content": "Lorem ipsum",
                "status": "Not completed"
            }
        ];
    }

    getNotes() {
        return this.notes;
    }

    addNote(note) {
        const lastId = this.getMaxId();
        this.notes.push({
            id: lastId + 1,
            status: "New",
            title: note.title,
            content: note.content
        });
    }

    deleteNotes(noteIds) {
        for(let i = 0; i < this.notes.length; i++) {
            if (noteIds.indexOf(this.notes[i].id) != -1) {
                this.notes.splice(i, 1);
                i--;
            }
        }
    }

    getMaxId() {
        let maxId = 0;
        for (let i = 0; i < this.notes.length; i++) {
            if (this.notes[i].id > maxId) {
                maxId = this.notes[i].id;
            }
        }
        return maxId;
    }
}

export default NoteService;