const express = require("express");
const bodyparser = require("body-parser");
const servidor = express();

servidor.use(bodyparser.json());
servidor.use(bodyparser.urlencoded({extended:false}));

servidor.set("view engine","ejs");
servidor.set("views",__dirname+("/views"));
servidor.use(express.static(__dirname+('/public')));

//controllers
servidor.use(require("./routers/router_login"));
servidor.use(require("./routers/router_inicio"));
servidor.use(require("./routers/router_productos"));
servidor.use(require("./routers/router_reportes"));
servidor.use(require("./routers/router_perfiles"));


servidor.post('/ingresar',(req,res)=>{
    let{txtype,txtu,txtc}=req.body;
    if (txtype == "comprador") {
        res.render("/index.ejs");
    }
    if (txtype == "empresa") {
        res.render("/homecliente.ejs");
    }
})
servidor.listen(4000,()=>{
    console.log("Esta corriendo en la 4000 =) ");
}) 