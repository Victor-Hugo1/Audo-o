var quizModel = require("../models/quizModel")


function enviarPontuacaoController(req, res) {
    var Introversao = req.body.IntroversaoServer;
    var Sensivel = req.body.SensivelServer;
    var Curiosa = req.body.CuriosaServer;
    var Energetica = req.body.EnergeticaServer;
    var idUsuario = req.body.idUsuarioServer;
    
    quizModel.enviarPontuacao(Introversao,Sensivel,Curiosa,Energetica,idUsuario)
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


function pegarPersonalidadesController(req, res) {
   
    var idUsuario = req.body.idUsuarioServer;
    
    quizModel.pegarPersonalidades(idUsuario)
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

function kpiPersonalidadeController(req, res) {
   
    var idUsuario = req.body.idUsuarioServer;
    
    quizModel.kpiPersonalidade(idUsuario)
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
    enviarPontuacaoController,
    pegarPersonalidadesController,
    kpiPersonalidadeController
}
