CREATE DATABASE IF NOT EXISTS EPSIncroyable;
USE EPSIncroyable;

-- Table des rôles
CREATE TABLE IF NOT EXISTS roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL
);

-- Table des utilisateurs
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
	prenom VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

-- Table des sauces (créée avant produits)
CREATE TABLE IF NOT EXISTS sauces (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ketchup BOOL NOT NULL DEFAULT 0,
    mayonnaise BOOL NOT NULL DEFAULT 0,
    moutarde BOOL NOT NULL DEFAULT 0,
    algerienne BOOL NOT NULL DEFAULT 0,
    biggyBurger BOOL NOT NULL DEFAULT 0,
    barbecue BOOL NOT NULL DEFAULT 0
);

-- Table des produits (sauce_id fait référence à la table sauces)
CREATE TABLE IF NOT EXISTS produits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    painBurger BOOL NOT NULL DEFAULT 0,
    painSandwiich BOOL NOT NULL DEFAULT 0,
    saladeVerte BOOL NOT NULL DEFAULT 0,
    tender BOOL NOT NULL DEFAULT 0,
    steak BOOL NOT NULL DEFAULT 0,
    salade BOOL NOT NULL DEFAULT 0,
    tomates BOOL NOT NULL DEFAULT 0,
    oignons BOOL NOT NULL DEFAULT 0,
    concombres BOOL NOT NULL DEFAULT 0,
    olives BOOL NOT NULL DEFAULT 0,
    cheddar BOOL NOT NULL DEFAULT 0,
	sauce VARCHAR(50) NOT NULL DEFAULT "",
);

-- Table des informations
CREATE TABLE IF NOT EXISTS information (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    adresse VARCHAR(255),
    telephone VARCHAR(20),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Table des commandes (créée après produits et users)
CREATE TABLE IF NOT EXISTS commandes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    produit_id INT,
    quantite INT,
    date DATE,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (produit_id) REFERENCES produits(id)
);
