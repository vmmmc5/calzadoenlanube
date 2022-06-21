const express = require('express');
const rutaReporte= express.Router();

const controladorReporte = require("../controllers/controller_reportes");

rutaReporte.get('/estadoenvio.ejs',controladorReporte.mostrarEstadoEnvio);
rutaReporte.get('/estadisticas.ejs',controladorReporte.mostrarEstadisticas);
rutaReporte.get('/reportes.ejs',controladorReporte.mostrarReportes);

module.exports=rutaReporte;