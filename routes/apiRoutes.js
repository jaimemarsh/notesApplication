const router = require('express').Router();
// const { Router } = require('express');
const store = require('../Develop/db/store')

router.get("/notes", (req, res) => {
    store
        .getNotes()
        .then(notes => {
            res.json(notes)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.post("/notes", (req, res) => {
    store
        .addNote(req.body)
        .then(note => {
            res.json(note)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.delete("/notes/:id", (req, res) => {
    store
        .removeNotes(req.params.id)
        .then(() => res.json({
            ok: true
        }))
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router

