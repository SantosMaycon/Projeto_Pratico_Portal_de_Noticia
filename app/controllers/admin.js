module.exports.formulario_inclusao_noticia = function(application, req, res){
    res.render('admin/form_add_noticia', {validacao : {}, noticia : {}});
}

module.exports.noticias_salvar = function(application, req, res) {
    var noticia = req.body;

        req.assert('titulo','O titulo é obrigatório!').notEmpty();
        req.assert('resumo','O resumo é obrigatório!').notEmpty();
        req.assert('resumo','O resumo deve conter no minimo 10 caracteres e maximo 100').len(10,100);
        req.assert('autor','O autor é obrigatório!').notEmpty();
        req.assert('data_noticia','A data da noticia é obrigatório!').notEmpty();
        req.assert('noticia', 'A noticia é obrigatoria').notEmpty();
        
        var erros = req.validationErrors();

        if(erros){
            console.log(erros);
            res.render('admin/form_add_noticia', {validacao : erros, noticia : noticia});
            return;
        }

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticias(noticia, function(error, result){
                res.redirect('/noticias'); 
        });
}