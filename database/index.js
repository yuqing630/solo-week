const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'plantlife',
  database: 'weather'
});

connection.connect((err) => {
  if (err) {
    console.log;
  } else {
    console.log('database connected')
  }
})
