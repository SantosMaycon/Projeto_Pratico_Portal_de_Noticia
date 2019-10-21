

module.exports = function(application){
    application.get('/noticias', function(req, res){
        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias(function(error, result){
                res.render('noticias/noticias', {noticias : result}); 
        })
    });

    application.get('/noticia', function(req, res){
        var connection = application.config.dbConnection();
        var noticiaModel = new application.app.models.NoticiasDAO(connection);

        noticiaModel.getNoticia(function(error, result){
            res.render('noticias/noticia', {noticia : result}); 
        })
    });
}
