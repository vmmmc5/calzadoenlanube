const express = require("express");
const bodyparser = require("body-parser");
const servidor = express();

servidor.use(bodyparser.json());
servidor.use(bodyparser.urlencoded({extended:false}));

servidor.set("view engine","ejs");
servidor.set("views",__dirname+("/views"));
servidor.use(express.static(__dirname+('/public')));

servidor.get('/',(req,res)=>{
    res.render('index.ejs');
})
servidor.get('/registrar.ejs',(req,res)=>{
    res.render('registrar.ejs');
})
servidor.get('/index.ejs',(req,res)=>{
    res.render('index.ejs');
})
servidor.get('/tiendas.ejs',(req,res)=>{
    res.render('tiendas.ejs');
})
servidor.get('/iniciar.ejs',(req,res)=>{
    res.render('iniciar.ejs');
})
servidor.listen(3000,()=>{
    console.log("Esta corriendo en la 3000 =) ");
}) 