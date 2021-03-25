const express = require('express'); 
const router = express.Router();
const pgp = require('pg-promise')({});
const db = require('../db');
const bodyParser = require('body-parser');



router.post('/', function(req, res) {
    var sql = 'INSERT INTO  SET ?';
  db.query(sql, req.body,function (err, data) { 
      if (err) throw err;
         console.log("User data is inserted successfully "); 
  });
 res.redirect('/new_sighting');  // redirect to user form page after inserting the data
}); 



  module.exports = router; 