const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const commandeRoutes = require('./routes/commandeRoutes');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/commande', commandeRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/burger', (req, res) => {
  res.render('burger');
});
app.get('/sandwich', (req, res) => {
  res.render('sandwich');
});
app.get('/salade', (req, res) => {
  res.render('salade');
});
app.get('/mentionLegal', (req, res) => {
  res.render('mentionLegal');
});

app.listen(3001, () => {
  console.log('Le serveur tourne sur http://localhost:3001');
});
