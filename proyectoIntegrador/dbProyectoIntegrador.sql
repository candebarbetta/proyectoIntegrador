CREATE SCHEMA proyectoIntegrador;

USE proyectoIntegrador;

CREATE TABLE usuarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL UNIQUE, 
    contrasena VARCHAR(200) NOT NULL, 
    fechaNacimiento DATE NOT NULL,
    documento INT NOT NULL UNIQUE, 
    fotoPerfil VARCHAR(100),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP 
);

CREATE TABLE productos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	imagen VARCHAR(100),
    nombre VARCHAR(100) NOT NULL, 
    descripcion VARCHAR(255) NOT NULL, 
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP, 
    usuario_id INT UNSIGNED NOT NULL, 
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    texto VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    usuario_id INT UNSIGNED NOT NULL, 
    producto_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);

INSERT INTO usuarios(id, email, contrasena, fechaNacimiento, documento, fotoPerfil, createdAt, updatedAt, deletedAt)
VALUES 
(DEFAULT, "bernigamboa@gmail.com", "candelaria02", "2006-03-03", 467517124, "default-image.png", '2025-04-10 15:10:00', '2025-04-10 15:10:00', NULL),
(DEFAULT, "bernixd@gmail.com", "berni123", "2006-03-03", 467517125, "default-image.png", '2025-04-10 15:10:00', '2025-04-10 15:10:00', NULL),
(DEFAULT, "candelol@mail.com", "cande123", "2005-08-02", 467517126, "default-image.png", '2025-04-10 15:10:00', '2025-04-10 15:10:00', NULL),
(DEFAULT, "maria@gmail.com", "maria123", "2000-04-03", 467517127, "default-image.png", '2025-04-10 15:10:00', '2025-04-10 15:10:00', NULL),
(DEFAULT, "nachito@mail.com", "nacho123", "1999-05-11", 467517128, "default-image.png", '2025-04-10 15:10:00', '2025-04-10 15:10:00', NULL);

INSERT INTO productos(id, imagen, nombre, descripcion, createdAt, updatedAt, deletedAt, usuario_id)
VALUES
(DEFAULT, "gato_bengala.jpg", "Gato bengala", "Tiene manchas", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 1),
(DEFAULT, "gato-montes.jpeg", "Gato montes", "salvaje", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 2),
(DEFAULT, "gatoblanco.webp", "Gato blanco", "Es albino", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 3),
(DEFAULT, "gatocalico.jpg", "Gato calico", "Son todas mujeres", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 4),
(DEFAULT, "/gatos.png", "Gato normal", "Muy amigable", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 5),
(DEFAULT, "gatomarron.webp", "Gato marron", "Muy raro", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 1),
(DEFAULT, "gatopersa.jpg", "Gato persa", "Tiene cara plana", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 2),
(DEFAULT, "gatosiames.webp", "Gato siames", "Tiene ojos celestes", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 3),
(DEFAULT, "gatotuxedo.webp", "Gato tuxedo", "Tiene un traje", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 4),
(DEFAULT, "post_gato_esfinge.webp", "Gato esfinge", "Pelado.", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 5);

INSERT INTO comentarios(id, texto, createdAt, updatedAt, deletedAt, usuario_id, producto_id)
VALUES
-- Gato 1
(DEFAULT, "Que lindo gato!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 1, 1),
(DEFAULT, "Quiero uno!!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 2, 1),
(DEFAULT, "¡Adoro los gatos!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 3, 1),
-- Gato 2
(DEFAULT, "Que lindo gato!!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 1, 2),
(DEFAULT, "Quiero uno!!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 2, 2),
(DEFAULT, "¡Adoro los gatos!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 3, 2),
-- Gato 3
(DEFAULT, "Que lindo gato!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 1, 3),
(DEFAULT, "¡Adoro los gatos!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 3, 3),
(DEFAULT, "¡Adoro los gatos!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 2, 3),
-- Gato 4
(DEFAULT, "Que lindo gato!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 1, 4),
(DEFAULT, "Quiero uno!!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 2, 4),
(DEFAULT, "¡Adoro los gatos!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 3, 4),
-- Gato 5
(DEFAULT, "Que buen gato!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 1, 5),
(DEFAULT, "Lo amo", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 2, 5),
(DEFAULT, "¡Adoro los gatos!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 3, 5),
-- Gato 6
(DEFAULT, "Que lindo gato!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 1, 6),
(DEFAULT, "Quiero uno!!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 2, 6),
(DEFAULT, "¡Adoro los gatos!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 3, 6),
-- Gato 7
(DEFAULT, "Que lindo gato!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 1, 7),
(DEFAULT, "Quiero uno!!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 2, 7),
(DEFAULT, "¡Adoro los gatos!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 3, 7),
-- Gato 8
(DEFAULT, "Que lindo gato!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 1, 8),
(DEFAULT, "Quiero uno!!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 2, 8),
(DEFAULT, "¡Adoro los gatos!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 3, 8),
-- Gato 9
(DEFAULT, "Que lindo gato!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 1, 9),
(DEFAULT, "Quiero uno!!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 2, 9),
(DEFAULT, "¡Adoro los gatos!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 3, 9),
-- Gato 10
(DEFAULT, "Que lindo gato!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 1, 10),
(DEFAULT, "Quiero uno!!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 2, 10),
(DEFAULT, "¡Adoro los gatos!", '2025-04-11 11:14:00', '2025-04-11 11:14:00', NULL, 3, 10);

