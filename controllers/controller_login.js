const controlador={}

controlador.mostrarLogin=(req,res)=>{
    res.render('iniciar.ejs');
}
controlador.mostrarRegistro=(req,res)=>{
    res.render('registrar.ejs')
}
module.exports=controlador;