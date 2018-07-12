var express = require('express');
var app = express();
app.get('/produtos',function(req,res){
    res.send("<hmtl><body><h1>Listagm de produtos</h1></body></html>")
});
app.listen(3000,function(){
    console.log("seridor rodando");
});