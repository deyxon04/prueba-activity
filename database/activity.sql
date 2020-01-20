CREATE DATABASE prueba_activity;

USE prueba_activity;


CREATE TABLE users (
  id INT(11) NOT NULL,
  usuario VARCHAR(16) NOT NULL,
  password VARCHAR(60) NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  cedula INT(20) NOT NULL UNIQUE,
  email  VARCHAR(100) NOT NULL,
  admin BOOL NOT NULL
);

ALTER TABLE users
  ADD created_at timestamp NOT NULL DEFAULT current_timestamp;

ALTER TABLE users
  MODIFY id INT(11) AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE users;
