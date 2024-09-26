// config/database.js
const mysql = require('mysql2');

// Créer une connexion à la base de données
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',         // Change ceci en ton nom d'utilisateur MySQL
  password: 'root', // Change ceci en ton mot de passe MySQL
  database: 'EPSIncroyable',
});

// Connexion à la base de données
connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
  } else {
    console.log('Connecté à la base de données MySQL.');
  }
});

module.exports = connection;


/*
const connection = mysql.createConnection({
  host: '192.168.1.156',
  user: 'root',         // Change ceci en ton nom d'utilisateur MySQL
  password: 'root', // Change ceci en ton mot de passe MySQL
  database: 'EPSI',
});
*/