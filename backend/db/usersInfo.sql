DROP DATABASE IF EXISTS users_info;
CREATE DATABASE users_info;

\c users_info;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    phone_number VARCHAR NOT NULL
);

INSERT INTO users (username, email, phone_number) VALUES ( 'David Alvarado', 'blabla@quizas.com', 111222333), ('Nadia Nuñez', 'creek@ojala.com', 4445555666),('Luna Frias', 'lu@parlanchin.com', 6667778888) 