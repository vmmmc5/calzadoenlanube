const controlador={}

controlador.mostrarProducto=(req,res)=>{
    res.render('productos.ejs');
}
controlador.mostrarPromocion=(req,res)=>{
    res.render('promociones.ejs');
}
controlador.mostrarInventario=(req,res)=>{
    res.render('inventario.ejs');
}

module.exports=controlador;