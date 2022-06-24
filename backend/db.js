const PGUSER = 'postgres';
const PGPASS = 'postgres';
const PGHOST = '172.20.0.2';
const PGPORT = 5432;
const PGDB   = 'company_db';


const conn = `postgres://${PGUSER}:${PGPASS}@${PGHOST}:${PGPORT}/${PGDB}`;
var pgp = require('pg-promise')();
var db = pgp(conn);

module.exports = db;