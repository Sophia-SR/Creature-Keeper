const express = require('express'); 
const router = express.Router();
const pgp = require('pg-promise')({});
const db = require('../db');

//query database for information

router.get('/', (req, res) => {
    db.any("SELECT * FROM sightings")
    .then(rows => {
        console.log(rows);
        res.json(rows)
    })
    .catch(error => {
     console.log(error);
    })
})


module.exports = router;