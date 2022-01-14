const dbc = require('../config/db');
const db = dbc.getDB();


// Sélectionner tout les utilisateurs de la base de données
exports.getAllUsers = (req, res, next) => {
    const { id: userId } = req.params;
    const sqlGetUser = `SELECT * FROM users = ${userId};`;
    db.query(sqlGetUser, (err, result) => {
      if (err) {
        res.status(404).json({ err });
        throw err;
      }
      delete result[0].user_password;
      res.status(200).json(result);
    });
  };

// Trouver un utilisateur dans la base de données grâce à son id
  exports.getOneUser = (req, res, next) => {
    const { id: userId } = req.params;
    const sqlGetUser = `SELECT * FROM users WHERE users.user_id = ${userId};`;
    db.query(sqlGetUser, (err, result) => {
      if (err) {
        res.status(404).json({ err });
        throw err;
      }
      delete result[0].user_password;
      res.status(200).json(result);
    });
  };


  // Mise à jour des informations de chaques utilisateurs
  exports.updateUser = (req, res, next) => {
    const { userName, email, password } = req.body;
    const { id: userId } = req.params;
    const sqlUpdateUser = `UPDATE users SET userName = "${userName}", email = "${email}", password="${password}" WHERE users.user_id = ${userId};`;
    db.query(sqlUpdateUser, (err, result) => {
      if (err) {
        res.status(404).json({ err });
        throw err;
      }
      if (result) {
        res.status(200).json({message: "Utilisateur modifié avec succès !"});
      }
    });
  };


  // Supprimer un utilisatuer de la base de données
  exports.deleteUser = (req, res) => {
    const user_id = req.params.id
    const sql = `DELETE FROM users WHERE user_id = ${user_id}`;
    db.query(sql, (err, result) => {
      if (err) {
        res.status(404).json({ err });
        throw err;
      }
      res.status(200).json({ message: "Utilisateur supprimé !" });
    });
  };

  



  





