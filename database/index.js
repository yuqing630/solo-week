const mysql = require('mysql');
const config = require('../config.js')

const connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  port: config.port,
  database: config.database
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
