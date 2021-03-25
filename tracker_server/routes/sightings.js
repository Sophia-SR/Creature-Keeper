const { Router } = require('express');
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


router.post("/", async (req, res) => {
    console.log(req.body) 
    try {
         const addSighting = await db.query( 
                "INSERT INTO sightings (animal_Name, sighting_date, sighting_location, healthy, contact) 
                VALUES ($1 $2, $3, $4, $5) 
                RETURNING *"
                [req.body.animalName, req.body.sightDate, req.body.sightLoc, req.body.healthy, req.body.contact]
                );  
      console.log(addSighting);
      res.status(201).json({
        status: "success",
        data: {
          sighting: addSighting.rows[0],
        },
      });
    } catch (err) {
      console.log(err);
    }
});


  
module.exports = router;