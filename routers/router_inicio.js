const express = require('express');
const rutaInicio = express.Router();

const controladorInicio = require("../controllers/controller_inicio");

rutaInicio.get('/',controladorInicio.mostrarInicio);
rutaInicio.get('/index.ejs',controladorInicio.mostrarIndex);
rutaInicio.get('/homecliente.ejs',controladorInicio.mostrarInicioCliente);

module.exports=rutaInicio;