
    app.get('/removeproduto',function(){
    var connection = app.infr.Con;nectionFactory;
    var produtos = app.infra.produtosBanco;
    var produto = produtosBanco.carrega(connection,id,callback);

    if(produto){
        produtosBanco.remove(connection,produto,callback);

    }
});