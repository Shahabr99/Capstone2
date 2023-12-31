const {Client} = require("pg");

const {getDatabase} = require('./config');
let db;

if(process.env.NODE_ENV === "production") {
  db = new Client({
    connectionString: getDatabase()
  });
}else{
  db = new Client({
    connectionString: getDatabase()
  });
}


db.connect();
module.exports = db;