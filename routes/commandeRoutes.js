const express = require('express');
const router = express.Router();
const commandeController = require('../controllers/commandeController');

// Route pour ajouter une commande
router.post('/ajouter-commande', commandeController.ajouterCommande);

// Route pour afficher les commandes aux restaurateurs
router.get('/restaurateur', commandeController.afficherCommandes);

// Route pour afficher la page de succès après ajout de commande
router.get('/success', (req, res) => {
  res.render('success', { message: 'Commande ajoutée avec succès !' });
});

// Route pour afficher la page de commande de sandwich
router.get('/sandwich', (req, res) => {
  res.render('sandwich'); // Rendre la vue 'sandwich.ejs'
});

// Route pour afficher la page de commande de salade verte
router.get('/salade', (req, res) => {
  res.render('salade'); // Rendre la vue 'salade.ejs'
});

module.exports = router;
