const express = require('express'); 
const app = express();
const router = express.Router();
const pgp = require('pg-promise')({});
const db = require('../db');
const bodyParser = require('body-parser');


// router.post("/", async (req, res) => {
//     try {
//          const addSighting = async (body) => (
//             await db.none(
//                 'INSERT INTO sightings'
//                 + ' (animal_Name, sighting_date, sighting_location, healthy, contact)'
//                 + ' VALUES'
//                 + ' (${animal_Name}, ${sighting_date}, ${sighting_location}, ${healthy}, ${contact})'
//                 + ' RETURNING *',
//                 body)
//                 .catch(e => console.error(e.stack))
//         );
//       res.json(addSighting.rows[0]);
//     } catch (err) {
//       console.error(err.message);
//     }
//   });
  



  module.exports = router; 