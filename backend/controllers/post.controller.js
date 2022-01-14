const dbc = require('../config/db');
const db = dbc.getDB();

exports.getAllPosts =  (req, res ) => {
    const { id: userId } = req.params;
    const sqlGetPosts = `SELECT * FROM posts = ${userId};`;
    db.query(sqlGetPosts, (err, result) => {
      if (err) {
        res.status(404).json({ err });
        throw err;
      }
      delete result[0].user_password;
      res.status(200).json(result);
    });
}

exports.createPost = (req, res ) => {
    try {
        const user = {
          ...req.body,    };
        const sql = "INSERT INTO posts SET ?";
        const db = dbc.getDB();
        db.query(sql, user, (err, result) => {
          if (!result) {
            res.status(200).json({ message: "" });
          } else {
            res.status(201).json({ message: "Post publié !" });
          }
        });
      } catch (err) {
        res.status(200).json({ message: "Échec de l'envoi du post"});
      }
}

exports.updatePost = (req, res ) => {
    
}

exports.deletePost = (req, res ) => {
    
}