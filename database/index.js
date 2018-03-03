const mysql = require('mysql');
const config = require('../config.js')

const connection = mysql.createConnection({
  host: config.host || 'localhost',
  user: config.user || 'student',
  password: config.password || 'student',
  port: config.port || '3306',
  database: config.database || 'weather'
});

connection.connect((err) => {
  if (err) {
    console.log;
  } else {
    console.log('database connected')
  }
})

connection.query(`CREATE TABLE IF NOT EXISTS favorite (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
  latitude DECIMAL (11, 8),
  longitude DECIMAL (11, 8),
  temp INT,
  PRIMARY KEY (id)
);`, (err, results)=>{
  if (err){
    console.log(err)
  }
})

module.exports = connection;
