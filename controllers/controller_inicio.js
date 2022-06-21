const controlador={}

controlador.mostrarInicio=(req,res)=>{
    res.render('index.ejs');
}
controlador.mostrarIndex=(req,res)=>{
    res.render('index.ejs');
}
controlador.mostrarInicioCliente=(req,res)=>{
    res.render('homecliente.ejs');
}
module.exports=controlador;