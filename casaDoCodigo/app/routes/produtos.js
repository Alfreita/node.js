
module.exports = function(app){
app.get('/produtos',function(req,res){
    var mysql =  require('mysql');
    var connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'node'
    });
    connection.query('select * from livro',function(err,results){
    res.render('produtos/lista',{lista:results});
    });
    connection.end();
    
    });
} 