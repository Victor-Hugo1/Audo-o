var gameModel = require("../models/gameModel")


function cadastrar(req, res) {
    var pontuacao = req.body.contarServer;
    var idUsuario = req.body.idUsuarioServer;
    var qtdVezesJogadas = req.body.qtdVezesJogadasServer;


    if (pontuacao == undefined) {
        res.status(400).send("Você não tem nenhuma pontuação")
    }else if(idUsuario == undefined){
        res.status(400).send("Você não tem um ID")
    }

    gameModel.cadastrar(pontuacao,idUsuario,qtdVezesJogadas)
        .then(
            function (resultado) {
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
    cadastrar
}
