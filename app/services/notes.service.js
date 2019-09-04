'use strict';

class NotesService {
    // Contains hard-coded data
    // In a real application should get data from the backend
    getNotes() {
        return [
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
}

export default NotesService;