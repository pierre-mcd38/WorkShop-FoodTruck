const Produit = require('../models/produit');

exports.ajouterCommande = async (req, res) => {
  try {
    const produitData = {
      nom: req.body.nom,
      painBurger: req.body.painBurger || 0,
      painSandwich: req.body.painSandwich || 0,
      steak: req.body.steak || 0,
      cheddar: req.body.cheddar || 0,
      saladeVerte: req.body.saladeVerte || 0,
      tomates: req.body.tomates || 0,
      oignons: req.body.oignons || 0,
      tender: req.body.tender || 0,
      concombres: req.body.concombres || 0,
      olives: req.body.olives || 0,
      sauce: req.body.sauce || ""
    };

    const produitId = await Produit.ajouterProduit(produitData);
    res.redirect('/commande/success');
  } catch (error) {
    console.error('Erreur lors de l\'ajout de la commande :', error);
    res.status(500).send('Erreur du serveur');
  }
}

exports.afficherCommandes = async (req, res) => {
  try {
    const commandes = await Produit.recupererTousLesProduits(); // Récupère les commandes de la base de données
    res.render('restaurateur', { commandes }); // Rend la vue avec les commandes passées
  } catch (error) {
    console.error('Erreur lors de l\'affichage des commandes :', error);
    res.status(500).send('Erreur du serveur');
  }
};
