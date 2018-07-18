var connectionFactory = require('../infra/ConnectionFactory');
module.exports = function(app){
  app.get('/produtos',function(req,res){

      var connection = connectionFactory();

      connection.query('select * from livro',function(err,results){
          res.render('produtos/lista', {lista:results});
      });

      connection.end();

  });
}