const path = require('path');
const router = require('express').Router();

//GET route for notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/notes.html'));
});

//Wildcard route 
router.get('*', (req, res) => res.sendFile(path.join(__dirname, '../Develop/public/index.html')));

module.exports = router;