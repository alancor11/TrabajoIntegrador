--Primero que nada, utilizamos el comando CREATE DATABASE para crear nuestra base de datos, 
--y le asignamos el nombre que queramos.
CREATE DATABASE SqlTpIntegrador
--Luego, debemos seleccionarla para empezar a trabajar con ella. Utilizamos el comando USE
USE SqlTpIntegrador
--Creamos una tabla utilizando el comando CREATE TABLE
CREATE TABLE Personas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    apellido VARCHAR(25),
    nombre VARCHAR(25),
    dni INT 
    profesion VARCHAR(25),
);
--Ahora le asignamos los datos o variables a la tabla, utilizando el comando INSERT INTO
INSERT INTO Personas (apellido, nombre, dni, profesion)
VALUES ('Gerardo', 'Gómez', 50),
       ('Claudia', 'López', 24),
       ('Mariano', 'Juárez', 77);
--Consultamos datos. Una vez asignados ciertos valores a modo de ejemplo, podemos utilizar el comando SELECT para seleccionar TODOS los registros de "Personas"
SELECT * FROM Personas;
--Y ahora sí, podemos modificar y/o eliminar los datos existentes y volverlos a consultar. Con SET asigno valores a columnas específicas de una tabla. Where significa que sólo afectará a las columnas que tengan ese valor.
UPDATE Personas
SET edad = 31
WHERE nombre = 'Claudia';
-- Eliminar datos
DELETE FROM Personas
WHERE nombre = 'Gerardo';
-- Consultar datos actualizados
SELECT * FROM Usuarios;
-- Cerrar la conexión
QUIT;