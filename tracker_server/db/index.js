const pgp = require('pg-promise')(/*options*/);
const db = pgp('postgres://tpl6_2021h1:techtonica@localhost:5432/animal_tracker');

module.exports = db;