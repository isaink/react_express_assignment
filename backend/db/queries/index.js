const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost:5432/users_info');

module.exports = { db }