const dbc = require('../config/db');
const db = dbc.getDB();


// Obtenir tout les commentaires de la base de données comments
exports.getAllComments = (req, res, next) => {
    const { id: userId } = req.params;
    const sqlGetUser = `SELECT * FROM comments = ${userId};`;
    db.query(sqlGetUser, (err, result) => {
      if (err) {
        res.status(404).json({ err });
        throw err;
      }
      delete result[0].user_password;
      res.status(200).json(result);
    });
  };

// Obtenir un commentaire en particulier grâce à son id
  exports.getOneComment = (req, res, next) => {
    const { id: userId } = req.params;
    const sqlGetUser = `SELECT * FROM comments WHERE comments.user_id = ${userId};`;
    db.query(sqlGetUser, (err, result) => {
      if (err) {
        res.status(404).json({ err });
        throw err;
      }
      delete result[0].user_password;
      res.status(200).json(result);
    });
  };


// Créer un commentaire
exports.createComment = (req, res ) => {
    try {
        const user = {
          ...req.body,    };
        const sql = "INSERT INTO comments SET ?";
        const db = dbc.getDB();
        db.query(sql, user, (err, result) => {
          if (!result) {
            res.status(200).json({ message: "" });
          } else {
            res.status(201).json({ message: "Commentaire publié !" });
          }
        });
      } catch (err) {
        res.status(200).json({ message: "Échec de l'envoi du commentaire"});
      }
}



// Supprimer un commentaire de la base de données
  exports.deleteOneComment = (req, res) => {
    const user_id = req.params.id
    const sql = `DELETE FROM comments WHERE user_id = ${user_id}`;
    db.query(sql, (err, result) => {
      if (err) {
        res.status(404).json({ err });
        throw err;
      }
      res.status(200).json({ message: "Commentaire supprimé !" });
    });
  };

// Mise à jour d'un commentaire
  exports.updateComment = (req, res, next) => {
    const { userName, comment } = req.body;
    const { id: userId } = req.params;
    const sqlUpdateUser = `UPDATE comments SET userName = "${userName}", comment = "${comment}" WHERE comments.user_id = ${userId};`;
    db.query(sqlUpdateUser, (err, result) => {
      if (err) {
        res.status(404).json({ err });
        throw err;
      }
      if (result) {
        res.status(200).json({message: "Commentaire modifié avec succès !"});
      }
    });
  };