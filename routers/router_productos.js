const express = require('express');
const rutaProducto = express.Router();

const controladorProducto = require("../controllers/controller_productos");

rutaProducto.get('/productos.ejs',controladorProducto.mostrarProducto);
rutaProducto.get('/promociones.ejs',controladorProducto.mostrarPromocion);
rutaProducto.get('/inventario.ejs',controladorProducto.mostrarInventario);

module.exports=rutaProducto;