const express = require('express');
const rutaLogin = express.Router();

const controladorLogin = require("../controllers/controller_login");

rutaLogin.get('/iniciar.ejs',controladorLogin.mostrarLogin);
rutaLogin.get('/registrar.ejs',controladorLogin.mostrarRegistro);

module.exports=rutaLogin;