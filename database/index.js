const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'weather'
});

connection.connect((err) => {
  if (err) {
    console.log;
  } else {
    console.log('database connected')
  }
})

module.exports = connection;
