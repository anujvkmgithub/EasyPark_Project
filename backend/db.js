const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cdac',
  database: 'parking_reservation_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database');
});

module.exports = db;
