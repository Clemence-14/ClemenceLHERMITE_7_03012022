const express = require('express');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// Routes vers les éléments
//const UserModel = require('../models/user.model');

//CORS
// Permet d'accéder à notre api depuis n'importe quelle origine (*)
// Permet d'ajouter les headers mentionnés aux requêtes envoyées vers l'api (Origin, X-Requested-With...)
// Permet d'envoyer des requêtes avec les méthodes mentionnées (get, post...)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  



// Routes
app.use('/api/user', userRoutes)
app.use('/api/post', postRoutes)



module.exports = app;