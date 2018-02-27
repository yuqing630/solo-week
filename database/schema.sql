DROP DATABASE IF EXISTS weather;

CREATE DATABASE weather;

USE weather;

CREATE TABLE currentTemp (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
  latitude DECIMAL (11, 8),
  longitude DECIMAL (11, 8),
  temp INT,
  PRIMARY KEY (id)
)
