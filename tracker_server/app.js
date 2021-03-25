//require and initialize instance of express
const express = require('express'); 
const port = 3001; 
const app = express(); 

const db = require('./db')
const cors = require('cors');

// const pgp = require('pg-promise')(/*options*/);
// const db = pgp('postgres://tpl6_2021h1:techtonica@localhost:5432/animal_tracker');

const sightingsRouter = require('./routes/sightings');
// const newSightingRouter = require('./routes/new_sighting');

app.use(cors());
app.use(express.json());

app.use("/sightings", sightingsRouter);
// app.use("/new_sighting", newSightingRouter );


//
app.listen(port, () => {
    console.log(`Example app listening at http:localhost${port}`)
})
