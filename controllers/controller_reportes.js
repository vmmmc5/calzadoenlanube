const controlador={}

controlador.mostrarEstadoEnvio=(req,res)=>{
    res.render('estadoenvio.ejs');
}
controlador.mostrarReportes=(req,res)=>{
    res.render('reportes.ejs');
}
controlador.mostrarEstadisticas=(req,res)=>{
    res.render('estadisticas.ejs');
}
module.exports=controlador;