//const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const dbc = require('../config/db');




////SIGNUP - Fonction pour créer un utilisateur dans la BDD////

exports.signup = async (req, res) => {
    try {
    const user = {
      ...req.body,    };
    const sql = "INSERT INTO users SET ?";
    const db = dbc.getDB();
    db.query(sql, user, (err, result) => {
      if (!result) {
        res.status(200).json({ message: "Email déjà enregistré" });
      } else {
        res.status(201).json({ message: "Utilisateur crée !" });
      }
    });
  } catch (err) {
    res.status(200).json({ message: "Échec de l'enregistrement"});
  }
};

exports.signin = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  
  
  const sqlFindUser = "SELECT user_id, userName, password FROM users WHERE email = ?";
//recherche de l'utilisateur dans la base de données
  const db = dbc.getDB();
  db.query(sqlFindUser, [email], function (err, result) {
      if (err) {
          return res.status(500).json(err.message);
      }
      if (result.length == 0) {
          return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      bcrypt.compare(req.body.password, result[0].password).then(valid => {
        if (!result) {
          res.status(401).send({ message: "mot de passe incorrect" });
        }
        const token = jwt.sign({ email: result[0].email }, 'JWT_TOKEN', { expiresIn: '24h'})
        res.cookie("jwt", token);
        res.status(201).json({ message: "Utilisateur connecté" });
        })
      })
    }
  //});
//}
      
   
  //)}


  exports.logout = (req, res) => {
    res.clearCookie("jwt");
    res.status(200).json({ message: "Utilisateur déconnecté"});
  }
  