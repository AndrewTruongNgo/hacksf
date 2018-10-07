DROP DATABASE arena_world;

CREATE DATABASE arena_world;

USE arena_world;

CREATE TABLE users (
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  position VARCHAR(255),
  height DECIMAL,
  weight_lbs INT,
  school VARCHAR(255),
  wins INT,
  losses INT
);
