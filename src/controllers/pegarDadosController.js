var pegarDadosModel = require("../models/pegarDadosModel")


function pegar3MaioresPontuacoesController(req,res){

    pegarDadosModel.pegar3MaioresPontuacoes()
    .then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro enviar sua pontuação: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}


function MaiorPontuacaoController(req,res){
    
    var idUsuario = req.body.idUsuarioServer

    pegarDadosModel.MaiorPontuacao(idUsuario)
    .then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro enviar sua pontuação: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}


function qtdVezesJogadasController(req,res){
    
    var idUsuario = req.body.idUsuarioServer

    pegarDadosModel.qtdVezesJogadas(idUsuario)
    .then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro enviar sua pontuação: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    pegar3MaioresPontuacoesController,
    MaiorPontuacaoController,
    qtdVezesJogadasController
}