const db = require('../config/database'); // Importez la connexion à la base de données

const Produit = {
  // Fonction pour ajouter une commande
  ajouterProduit: (data) => {
    return new Promise((resolve, reject) => {
      const { nom, painBurger, painSandwich, steak, cheddar, saladeVerte, tomates, oignons, tender, concombres, olives, sauce } = data;
      const sql = `INSERT INTO produits (nom, painBurger, painSandwich, steak, cheddar, saladeVerte, tomates, oignons, tender, concombres, olives, sauce) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      db.query(sql, [nom, painBurger, painSandwich, steak, cheddar, saladeVerte, tomates, oignons, tender, concombres, olives, sauce], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results.insertId); // Renvoie l'ID du produit inséré
      });
    });
  },

  // Fonction pour récupérer toutes les commandes
  recupererTousLesProduits: () => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM produits'; // Récupère toutes les commandes
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results); // Renvoie les résultats des commandes
      });
    });
  },
};

module.exports = Produit;
