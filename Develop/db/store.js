const util = require('util');
const fs = require('fs');
//used for creating unique ids
const uuid = require('uuid');

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

class Store {
    read() {
        return readFileAsync("Develop/db/db.json", "utf8")
    }
    write(note) {
        return writeFileAsync("Develop/db/db.json", JSON.stringify(note))
    }
    addNote(note) {
        const { title, text } = note

        if (!title || !text) {
            throw new Error("Title and/or text cannot be blank")
        }

        const newNote = { title, text, id: uuid() }

        return this.getNotes()
            .then(notes => [...notes, newNote])
            .then(updatedNotes => this.write(updatedNotes))
            .then(() => this.newNote)
    }
    getNotes() {
        return this.read()
            .then(notes => {
                return JSON.parse(notes) || []
            })
    }
    removeNotes(id) {
        return this.getNotes()
            .then(notes => notes.filter(note => note.id !== id))
            .then(keptNotes => this.write(keptNotes))
    }
}
module.exports = new Store()