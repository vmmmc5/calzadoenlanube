const express = require('express');
const rutaPerfil= express.Router();

const controladorPerfil = require("../controllers/controller_perfiles");

rutaPerfil.get('/tiendas.ejs',controladorPerfil.mostrarTiendas);
rutaPerfil.get('/perfil.ejs',controladorPerfil.mostrarPerfil);

module.exports=rutaPerfil;