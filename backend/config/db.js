const mysql = require('mysql');

// Connection à la base de données
const db = mysql.createConnection({
    host: '127.0.0.1',
    port: '8889',
    user: 'root',
    password: 'root',
    database: 'groupomania',
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL !");
  db.query("SELECT * FROM users WHERE 1", function(err, result) {
  if (err) throw err;
  //console.log(result);
  })
});


  
  module.exports.getDB = () => {
      return db
  }