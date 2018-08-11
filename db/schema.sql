DROP DATABASE IF EXISTS burgerORM;
CREATE DATABASE burgerORM;

USE burgerORM;

drop TABLE burgers;

CREATE TABLE burgers(
id int NOT NULL AUTO_INCREMENT,
routeName varchar(255),
burgerName varchar(255) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);
SELECT * FROM burgers;

