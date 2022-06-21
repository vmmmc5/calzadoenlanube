const express = require('express');
const rutaRegistro = express.Router();

const controladorRegistro = require("../controllers/controller_registro");

rutaRegistro.get('/registar.ejs',controladorRegistro.mostrarRegistro);

module.exports=rutaRegistro;