const controlador={}

controlador.mostrarTiendas=(req,res)=>{
    res.render('tiendas.ejs');
}
controlador.mostrarPerfil=(req,res)=>{
    res.render('perfil.ejs');
}
module.exports=controlador;