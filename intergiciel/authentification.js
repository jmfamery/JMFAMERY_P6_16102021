const authentification = require('jsonwebtoken');
require('dotenv').config();
const securite = process.env.DB_securite;

// authentification de l'utilisateur
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoderToken = authentification.verify(token, securite);
    req.utilisateurId = decoderToken.utilisateurId;
    if (!req.utilisateurId) {
      throw 'Utilisateur ID non valable !';
    } 
    next();
  } catch (error) {
    res.status(401).json({ error: error | 'Requête non authentifiée !'});
  }
};